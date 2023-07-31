import { ImportaDados } from "../services/importaDados.js";
import { AdmCategoriasView } from "../views/adm-categorias-view.js";
import { AdmSeletorCategoriasView } from "../views/adm-seletor-categorias-view.js";
import { Categoria } from "./categoria.js";
export class ListaDeCategorias extends ImportaDados {
    constructor() {
        super();
        this.categorias = [];
        this.categoriasView = new AdmCategoriasView('#ListaDeCategoriasADM');
        this.seletorCategoriasView = new AdmSeletorCategoriasView('#SeletorCategoriaProduto');
    }
    montaLista() {
        this.obterDados('BuscaCategorias')
            .then(categorias => {
            if (!Array.isArray(categorias)) {
                console.log('Os dados obtidos não são uma lista de produtos válida.');
                return;
            }
            this.LimpaLista();
            for (let categoria of categorias) {
                this.adiciona(new Categoria(categoria.Codigo, categoria.Categoria, categoria.Imposto));
            }
            this.categoriasView.update(this);
            this.seletorCategoriasView.update(this);
        });
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