import { Produto } from "./produto.js";

export class ListaDeProdutos 
{
    private produtos: Produto[] = [];

    public adiciona(produto: Produto) 
    {
        this.produtos.push(produto);
    }

    public lista(): Produto[] 
    {
        return this.produtos;
    }

    public LimpaLista(): void
    {
        this.produtos = []
    } 

}