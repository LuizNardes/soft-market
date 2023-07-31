export class Produto {
    constructor(
        public readonly CodigoProduto:string,
        public readonly Nome:string,
        public readonly Categoria:string,
        public readonly Valor:number,
        public readonly Imposto:number,
        public readonly Foto:string
    ){}
}