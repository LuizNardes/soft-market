export class ListaDeProdutosHistorico {
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
//# sourceMappingURL=lista-de-produto-historico.js.map