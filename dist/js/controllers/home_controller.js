import { EnviaParaCarrinho } from "../models/envia-para-carrinho.js";
import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { Produto } from "../models/produto.js";
import { ImportaDados } from "../services/importaDados.js";
import { HomeProdutosView } from "../views/home-produtos-view.js";
export class HOME {
    constructor() {
        this.listaDeProdutos = new ListaDeProdutos();
        this.produtosView = new HomeProdutosView('#ProdutosHome');
        this.EnviaParaCarrinho = new EnviaParaCarrinho();
        this.MontaViewDeProdutos();
    }
    MontaViewDeProdutos() {
        const service = new ImportaDados();
        service.obterDados('BuscaProdutos')
            .then((produtos) => {
            if (!Array.isArray(produtos)) {
                console.log('Os dados obtidos não são uma lista de produtos válida.');
                return;
            }
            this.listaDeProdutos.LimpaLista();
            produtos.map(produto => {
                this.listaDeProdutos.adiciona(new Produto(produto.CodigoProduto, produto.Nome, produto.Categoria, produto.Valor, produto.Imposto, produto.Foto));
            });
            this.produtosView.update(this.listaDeProdutos);
            this.EnviaParaCarrinho.AddEscutador();
        });
    }
}
//# sourceMappingURL=home_controller.js.map