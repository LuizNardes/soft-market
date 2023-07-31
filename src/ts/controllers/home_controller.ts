import { EnviaParaCarrinho } from "../models/envia-para-carrinho.js";
import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { Produto } from "../models/produto.js";
import { ImportaDados } from "../services/importaDados.js";
import { HomeProdutosView } from "../views/home-produtos-view.js";

export class HOME
{
    private listaDeProdutos = new ListaDeProdutos();
    private produtosView = new HomeProdutosView('#ProdutosHome');
    private EnviaParaCarrinho = new EnviaParaCarrinho();

    constructor()
    {
        this.MontaViewDeProdutos();
    }

    private MontaViewDeProdutos() {
        const service = new ImportaDados<Produto[]>();
        service.obterDados('BuscaProdutos')
            .then((produtos:Produto[]) => {
                if (!Array.isArray(produtos)) {
                    console.log('Os dados obtidos não são uma lista de produtos válida.');
                    return;
                }

                this.listaDeProdutos.LimpaLista();
    
                produtos.map(produto => {
                    this.listaDeProdutos.adiciona(new Produto(
                        produto.CodigoProduto,
                        produto.Nome,
                        produto.Categoria,
                        produto.Valor,
                        produto.Imposto,
                        produto.Foto
                    ))
                })

                this.produtosView.update(this.listaDeProdutos);
                this.EnviaParaCarrinho.AddEscutador();
            })
    }
}