var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ListaDeCategorias } from "../models/lista-de-categorias.js";
import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { insertDados } from "../services/insertDados.js";
export class ADM {
    constructor() {
        this.listaDeProdutos = new ListaDeProdutos();
        this.listaDeCategorias = new ListaDeCategorias();
        this.formNovoProduto = document.getElementById('FormNovoItem');
        this.listaDeProdutos.montaLista();
        this.listaDeCategorias.montaLista();
        this.formNovoProduto.addEventListener('submit', this.SalvarNovoProduto.bind(this));
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
                console.log(linhasAfetada);
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
                this.listaDeProdutos.montaLista();
            }
            catch (error) {
                console.error('Ocorreu um erro:', error);
            }
            finally {
            }
        });
    }
}
//# sourceMappingURL=adm_controller.js.map