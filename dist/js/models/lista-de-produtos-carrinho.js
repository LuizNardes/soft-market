export class ListaDeProdutosCarrinho {
    constructor() {
        this.produtos = [];
    }
    adiciona(produto) {
        this.produtos.push(produto);
    }
    lista() {
        return this.produtos;
    }
    LimpaLista() {
        this.produtos = [];
    }
}
//# sourceMappingURL=lista-de-produtos-carrinho.js.map