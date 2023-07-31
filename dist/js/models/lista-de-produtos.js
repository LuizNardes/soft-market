import { ImportaDados } from "../services/importaDados.js";
import { AdmProdutosView } from "../views/adm-produtos-view.js";
import { Produto } from "./produto.js";
export class ListaDeProdutos extends ImportaDados {
    constructor() {
        super();
        this.produtos = [];
        this.ProdutosView = new AdmProdutosView('#ListaDeProdutosADM');
    }
    montaLista() {
        this.obterDados('BuscaProdutos')
            .then(produtos => {
            if (!Array.isArray(produtos)) {
                console.log('Os dados obtidos não são uma lista de produtos válida.');
                return;
            }
            this.LimpaLista();
            for (let produto of produtos) {
                this.adiciona(new Produto(produto.CodigoProduto, produto.Nome, produto.Categoria, produto.Valor, produto.Imposto, produto.Foto));
            }
            this.ProdutosView.update(this);
        });
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
//# sourceMappingURL=lista-de-produtos.js.map