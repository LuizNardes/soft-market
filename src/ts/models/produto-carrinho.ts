export class ProdutoCarrinho {
    constructor(
        public readonly ID:string,
        public readonly Produto:string,
        public readonly CodigoProduto:string,
        public readonly Valor:number,
        public Qtd:number,
        public readonly Categoria:string,
        public readonly Imposto:number,
    ){}
}