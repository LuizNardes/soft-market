import { ProdutoHistorico } from "./produto-historico.js";

export class ListaDeProdutosHistorico
{
    private produtos: ProdutoHistorico[] = [];

    public adiciona(produto: ProdutoHistorico) 
    {
        this.produtos.push(produto);
    }

    public lista(): ProdutoHistorico[] 
    {
        return this.produtos;
    }

    public LimpaLista(): void
    {
        this.produtos = []
    } 
}