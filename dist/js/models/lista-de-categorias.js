export class ListaDeCategorias {
    constructor() {
        this.categorias = [];
    }
    adiciona(produto) {
        this.categorias.push(produto);
    }
    lista() {
        return this.categorias;
    }
    LimpaLista() {
        this.categorias = [];
    }
}
//# sourceMappingURL=lista-de-categorias.js.map