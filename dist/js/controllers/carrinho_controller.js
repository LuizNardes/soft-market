import { ListaDeProdutosCarrinho } from "../models/lista-de-produtos-carrinho.js";
import { ProdutoCarrinho } from "../models/produto-carrinho.js";
import { deleteDados } from "../services/deleteDados.js";
import { ImportaDados } from "../services/importaDados.js";
import { updateDados } from "../services/updateDados.js";
import { CarrinhoProdutosView } from "../views/carrinho-produtos-view.js";
export class CARRNHO {
    constructor() {
        this.listaDeProdutosCarrinho = new ListaDeProdutosCarrinho();
        this.CarrinhoView = new CarrinhoProdutosView('#ListaProdutosCarrinho');
        this.botaoFinalizaVenda = document.getElementById('FinalizaCompra');
        this.MontaViewDeProdutos();
        this.botaoFinalizaVenda.addEventListener('click', () => {
            this.FinalizaCompra();
        });
    }
    MontaViewDeProdutos() {
        const service = new ImportaDados();
        service.obterDados("BuscaProdutosCarrinho").then((produtos) => {
            if (!Array.isArray(produtos)) {
                console.log("O carrinho estã vazio.");
                return;
            }
            this.listaDeProdutosCarrinho.LimpaLista();
            produtos.map((produto) => {
                this.listaDeProdutosCarrinho.adiciona(new ProdutoCarrinho(produto.ID, produto.Produto, produto.CodigoProduto, produto.Valor, produto.Qtd, produto.Categoria, produto.Imposto));
            });
            this.CarrinhoView.update(this.listaDeProdutosCarrinho);
            this.CarrinhoView.SetQuantidades(this.listaDeProdutosCarrinho);
            this.CarrinhoView.CalculaTotais(this.listaDeProdutosCarrinho);
            const botoesExluir = document.querySelectorAll('.delete-produto');
            botoesExluir.forEach(botao => {
                const id = botao.dataset.id;
                botao.addEventListener('click', () => {
                    this.DeletaProduto(id);
                });
            });
            const botoesQuantidade = document.querySelectorAll('.quantidade-produto');
            botoesQuantidade.forEach(botao => {
                const id = botao.dataset.id;
                botao.addEventListener('change', () => {
                    const quantidade = botao.value;
                    this.AlteraQTD(id, quantidade);
                });
            });
        });
    }
    DeletaProduto(id) {
        const Deletador = new deleteDados();
        Deletador.delete('DeleteDoCarrinho', id);
        this.MontaViewDeProdutos();
    }
    AlteraQTD(id, quantidade) {
        const atualiza = new updateDados();
        atualiza.update(quantidade, id, 'carrinho', 'quantidade');
        this.MontaViewDeProdutos();
    }
    FinalizaCompra() {
        fetch(`http://localhost:8080/src/php/FinalizaVenda.php`)
            .then(res => res.json())
            .then((dados) => {
            window.location.href = "http://localhost:8080/agradecimento";
        });
    }
}
//# sourceMappingURL=carrinho_controller.js.map