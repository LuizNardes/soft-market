import { ImportaDados } from "../services/importaDados.js";
import { AdmProdutosView } from "../views/adm-produtos-view.js";
import { Produto } from "./produto.js";

export class ListaDeProdutos extends ImportaDados
{
    private produtos: Produto[] = [];
    private ProdutosView = new AdmProdutosView('#ListaDeProdutosADM');

    constructor()
    {
        super();
    }

    public montaLista(): void
    {
        this.obterDados('BuscaProdutos')
            .then(produtos => {

                if (!Array.isArray(produtos)) {
                    console.log('Os dados obtidos não são uma lista de produtos válida.');
                    // Ou, se você quiser mostrar uma mensagem na interface:
                    // this.mostrarMensagemDeErro('Os dados obtidos não são uma lista de produtos válida.');
                    return; // Sai da função caso não seja um array válido
                }

                this.LimpaLista();
                for(let produto of produtos){
                    this.adiciona(new Produto(
                        produto.CodigoProduto,
                        produto.Nome,
                        produto.Categoria,
                        produto.Valor,
                        produto.Imposto,
                        produto.Foto
                    ))
                }

                this.ProdutosView.update(this);
            })
    }

    public adiciona(produto: Produto) 
    {
        this.produtos.push(produto);
    }

    public lista(): Produto[] 
    {
        return this.produtos;
    }

    private LimpaLista(): void
    {
        this.produtos = []
    } 

}