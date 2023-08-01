import { ProdutoCarrinho } from "./produto-carrinho.js";

export class ListaDeProdutosCarrinho 
{
    private produtos: ProdutoCarrinho[] = [];

    public adiciona(produto: ProdutoCarrinho) 
    {
        this.produtos.push(produto);
    }

    public lista(): ProdutoCarrinho[] 
    {
        return this.produtos;
    }

    public LimpaLista(): void
    {
        this.produtos = []
    } 

}