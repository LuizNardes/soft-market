var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Categoria } from "../models/categoria.js";
import { ListaDeCategorias } from "../models/lista-de-categorias.js";
import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { Produto } from "../models/produto.js";
import { ImportaDados } from "../services/importaDados.js";
import { insertDados } from "../services/insertDados.js";
import { AdmCategoriasView } from "../views/adm-categorias-view.js";
import { AdmProdutosView } from "../views/adm-produtos-view.js";
import { AdmSeletorCategoriasView } from "../views/adm-seletor-categorias-view.js";
export class ADM {
    constructor() {
        this.listaDeProdutos = new ListaDeProdutos();
        this.ProdutosView = new AdmProdutosView('#ListaDeProdutosADM');
        this.listaDeCategorias = new ListaDeCategorias();
        this.categoriasView = new AdmCategoriasView('#ListaDeCategoriasADM');
        this.SeletorDeCategorias = new AdmSeletorCategoriasView('#SeletorCategoriaProduto');
        this.formNovoProduto = document.getElementById('FormNovoItem');
        this.FormNovaCategoria = document.getElementById('FormNovaCategoria');
        this.MontaViewDeProdutos();
        this.MontaViewDeCategorias();
        this.formNovoProduto.addEventListener('submit', this.SalvarNovoProduto.bind(this));
        this.FormNovaCategoria.addEventListener('submit', this.SalvarNovaCategoria.bind(this));
    }
    MontaViewDeProdutos() {
        const service = new ImportaDados();
        service.obterDados('BuscaProdutos')
            .then((produtos) => {
            if (!Array.isArray(produtos)) {
                console.log('Os dados obtidos não são uma lista de produtos válida.');
                return;
            }
            this.listaDeProdutos.LimpaLista();
            produtos.map(produto => {
                this.listaDeProdutos.adiciona(new Produto(produto.CodigoProduto, produto.Nome, produto.Categoria, produto.Valor, produto.Imposto, produto.Foto));
            });
            this.ProdutosView.update(this.listaDeProdutos);
            this.ProdutosView.AddEscutador();
        });
    }
    MontaViewDeCategorias() {
        const service = new ImportaDados();
        service.obterDados('BuscaCategorias')
            .then((categorias) => {
            if (!Array.isArray(categorias)) {
                console.log('Os dados obtidos não são uma lista de categorias válida.');
                return;
            }
            categorias.map(categoria => {
                this.listaDeCategorias.adiciona(new Categoria(categoria.Codigo, categoria.Categoria, categoria.Imposto));
            });
            this.categoriasView.update(this.listaDeCategorias);
            this.categoriasView.AddEscutador();
            this.SeletorDeCategorias.update(this.listaDeCategorias);
        });
    }
    SalvarNovaCategoria(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.FormNovaCategoria.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                this.FormNovaCategoria.classList.add('was-validated');
                return;
            }
            event.preventDefault();
            this.FormNovaCategoria.classList.add('was-validated');
            const NomeNovaCategoria = document.getElementById('nomeCategoria');
            const ImpostoNovaCategoria = document.getElementById('impostoCategoria');
            const botao = document.getElementById('SalvarNovaCategoria');
            const dados = {
                'categoria': NomeNovaCategoria.value,
                'imposto': Number(ImpostoNovaCategoria.value),
            };
            const insert = new insertDados();
            try {
                const linhasAfetadas = yield insert.insert('CadatraNovaCategoria', dados);
                if (linhasAfetadas != true) {
                    botao.classList.remove('btn-primary');
                    botao.classList.add('btn-danger');
                    botao.innerHTML = 'ERRO! Nova Categoria NÃO foi cadastrado';
                    this.FormNovaCategoria.classList.remove('was-validated');
                    setInterval(() => {
                        botao.classList.add('btn-primary');
                        botao.classList.remove('btn-danger');
                        botao.innerHTML = 'Salvar';
                    }, 5000);
                    return;
                }
                botao.classList.remove('btn-primary');
                botao.classList.add('btn-success');
                botao.innerHTML = 'Novo categoria cadastrada';
                setInterval(() => {
                    botao.classList.add('btn-primary');
                    botao.classList.remove('btn-success');
                    botao.innerHTML = 'Salvar';
                }, 3000);
                this.FormNovaCategoria.reset();
                this.FormNovaCategoria.classList.remove('was-validated');
                this.MontaViewDeCategorias();
            }
            catch (error) {
                console.error('Ocorreu um erro:', error);
            }
        });
    }
    SalvarNovoProduto(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.formNovoProduto.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                this.formNovoProduto.classList.add('was-validated');
                return;
            }
            event.preventDefault();
            this.formNovoProduto.classList.add('was-validated');
            const NomeNovoProduto = document.getElementById('nomeProduto');
            const ValorNovoProduto = document.getElementById('valorProduto');
            const CategoriaNovoProduto = document.getElementById('SeletorCategoriaProduto');
            const botao = document.getElementById('SalvarNovoProduto');
            const dados = {
                'nome': NomeNovoProduto.value,
                'categoria': CategoriaNovoProduto.value,
                'valor': Number(ValorNovoProduto.value)
            };
            const insert = new insertDados();
            try {
                const linhasAfetada = yield insert.insert('CadatraNovoProduto', dados);
                if (linhasAfetada != true) {
                    botao.classList.remove('btn-primary');
                    botao.classList.add('btn-danger');
                    botao.innerHTML = 'ERRO! Novo produto NÃO foi cadastrado';
                    this.formNovoProduto.classList.remove('was-validated');
                    setInterval(() => {
                        botao.classList.add('btn-primary');
                        botao.classList.remove('btn-danger');
                        botao.innerHTML = 'Salvar';
                    }, 5000);
                    return;
                }
                botao.classList.remove('btn-primary');
                botao.classList.add('btn-success');
                botao.innerHTML = 'Novo produto Cadastrado';
                setInterval(() => {
                    botao.classList.add('btn-primary');
                    botao.classList.remove('btn-success');
                    botao.innerHTML = 'Salvar';
                }, 3000);
                this.formNovoProduto.reset();
                this.formNovoProduto.classList.remove('was-validated');
                this.MontaViewDeProdutos();
            }
            catch (error) {
                console.error('Ocorreu um erro:', error);
            }
        });
    }
}
//# sourceMappingURL=adm_controller.js.map