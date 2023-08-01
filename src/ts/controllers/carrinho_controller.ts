import { ListaDeProdutosCarrinho } from "../models/lista-de-produtos-carrinho.js";
import { ProdutoCarrinho } from "../models/produto-carrinho.js";
import { deleteDados } from "../services/deleteDados.js";
import { ImportaDados } from "../services/importaDados.js";
import { updateDados } from "../services/updateDados.js";
import { CarrinhoProdutosView } from "../views/carrinho-produtos-view.js";

export class CARRNHO {
  private listaDeProdutosCarrinho:ListaDeProdutosCarrinho = new ListaDeProdutosCarrinho();
  private CarrinhoView:CarrinhoProdutosView = new CarrinhoProdutosView('#ListaProdutosCarrinho');
  private botaoFinalizaVenda:HTMLElement = document.getElementById('FinalizaCompra') as HTMLElement;

  constructor() {
    this.MontaViewDeProdutos();
    this.botaoFinalizaVenda.addEventListener('click', ()=>{
        this.FinalizaCompra();
    })
  }

  private MontaViewDeProdutos():void {
    const service = new ImportaDados<ProdutoCarrinho[]>();
    service.obterDados("BuscaProdutosCarrinho").then((produtos: ProdutoCarrinho[]) => {
      if (!Array.isArray(produtos)) {
        console.log("O carrinho estã vazio.");
        return;
      }

      this.listaDeProdutosCarrinho.LimpaLista();

      produtos.map((produto) => {
        this.listaDeProdutosCarrinho.adiciona(
          new ProdutoCarrinho(
            produto.ID,
            produto.Produto,
            produto.CodigoProduto,
            produto.Valor,
            produto.Qtd,
            produto.Categoria,
            produto.Imposto,
          )
        );
      });

      this.CarrinhoView.update(this.listaDeProdutosCarrinho);
      this.CarrinhoView.SetQuantidades(this.listaDeProdutosCarrinho);
      this.CarrinhoView.CalculaTotais(this.listaDeProdutosCarrinho);

      const botoesExluir = document.querySelectorAll('.delete-produto');
      botoesExluir.forEach(botao => {
        const id = (botao as HTMLElement).dataset.id as string;
        botao.addEventListener('click', ()=> {
            this.DeletaProduto(id);
        })
      })

      const botoesQuantidade = document.querySelectorAll('.quantidade-produto');
      
      botoesQuantidade.forEach(botao => {
          const id = (botao as HTMLInputElement).dataset.id as string;
          botao.addEventListener('change', ()=> {
            const quantidade = (botao as HTMLInputElement).value;
            this.AlteraQTD(id,quantidade);
        })
      })

    });
  }

  private DeletaProduto(id:string):void
  {
    const Deletador = new deleteDados();
    Deletador.delete('DeleteDoCarrinho',id);
    this.MontaViewDeProdutos();
  }

  private AlteraQTD(id:string,quantidade:string):void
  {
    const atualiza = new updateDados();
    atualiza.update(quantidade,id,'carrinho','quantidade');
    this.MontaViewDeProdutos();
  }

  private FinalizaCompra()
  {
    fetch(`http://localhost:8080/src/php/FinalizaVenda.php`)
    .then(res => res.json())
    .then((dados) => {
        window.location.href = "http://localhost:8080/agradecimento";
    });
  }

}
