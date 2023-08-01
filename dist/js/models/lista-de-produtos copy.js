export class ListaDeProdutos {
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
//# sourceMappingURL=lista-de-produtos%20copy.js.map