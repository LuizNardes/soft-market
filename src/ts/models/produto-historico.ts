export class ProdutoHistorico
{
    constructor(
        public readonly CodigoPedido:string,
        public readonly Produto:string,
        public readonly CodigoProduto:string,
        public readonly Quantidade:number,
        public readonly Valor:number,
        public readonly Subtotal:number,
        public readonly Imposto:number,
        public readonly ImpostoDoProduto:number,
        public readonly SubtotalImposto:number,
        public readonly Data:string
    ){}
}