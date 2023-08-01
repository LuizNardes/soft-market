import { Categoria } from "../models/categoria.js";
import { ListaDeCategorias } from "../models/lista-de-categorias.js";
import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { NAVCARRINHO } from "../models/nav_carrinho.js";
import { Produto } from "../models/produto.js";
import { ImportaDados } from "../services/importaDados.js";
import { insertDados } from "../services/insertDados.js";
import { AdmCategoriasView } from "../views/adm-categorias-view.js";
import { AdmProdutosView } from "../views/adm-produtos-view.js";
import { AdmSeletorCategoriasView } from "../views/adm-seletor-categorias-view.js";

export class ADM
{
    private listaDeProdutos =  new ListaDeProdutos();
    private ProdutosView = new AdmProdutosView('#ListaDeProdutosADM');

    private listaDeCategorias = new ListaDeCategorias();
    private categoriasView = new AdmCategoriasView('#ListaDeCategoriasADM');
    private SeletorDeCategorias = new AdmSeletorCategoriasView('#SeletorCategoriaProduto');

    private formNovoProduto = document.getElementById('FormNovoItem') as HTMLFormElement;
    private FormNovaCategoria = document.getElementById('FormNovaCategoria') as HTMLFormElement;

    private NavCarrinho = new NAVCARRINHO();

    constructor()
    {
        this.MontaViewDeProdutos();
        this.MontaViewDeCategorias();

        this.formNovoProduto.addEventListener('submit', this.SalvarNovoProduto.bind(this));
        this.FormNovaCategoria.addEventListener('submit', this.SalvarNovaCategoria.bind(this));
    }

    private MontaViewDeProdutos() {
        const service = new ImportaDados<Produto[]>();
        service.obterDados('BuscaProdutos')
            .then((produtos:Produto[]) => {
                if (!Array.isArray(produtos)) {
                    console.log('Os dados obtidos não são uma lista de produtos válida.');
                    return;
                }

                this.listaDeProdutos.LimpaLista();
    
                produtos.map(produto => {
                    this.listaDeProdutos.adiciona(new Produto(
                        produto.CodigoProduto,
                        produto.Nome,
                        produto.Categoria,
                        produto.Valor,
                        produto.Imposto,
                        produto.Foto
                    ))
                })

                this.ProdutosView.update(this.listaDeProdutos);
                this.ProdutosView.AddEscutador();
            })
    }

    private MontaViewDeCategorias() {
        const service = new ImportaDados<Categoria[]>();
        service.obterDados('BuscaCategorias')
            .then((categorias:Categoria[]) => {
                if (!Array.isArray(categorias)) {
                    console.log('Os dados obtidos não são uma lista de categorias válida.');
                    return; 
                }

    
                categorias.map(categoria => {
                    this.listaDeCategorias.adiciona(new Categoria(
                        categoria.Codigo,
                        categoria.Categoria,
                        categoria.Imposto
                    ))
                })

                this.categoriasView.update(this.listaDeCategorias);
                this.categoriasView.AddEscutador();
                this.SeletorDeCategorias.update(this.listaDeCategorias);
            })
    }

    private async SalvarNovaCategoria(event: Event)
    {
        if (!this.FormNovaCategoria.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            this.FormNovaCategoria.classList.add('was-validated');
            return
        }

        event.preventDefault();
        this.FormNovaCategoria.classList.add('was-validated');
        
        const NomeNovaCategoria = document.getElementById('nomeCategoria') as HTMLInputElement;
        const ImpostoNovaCategoria = document.getElementById('impostoCategoria') as HTMLInputElement;
        const botao = document.getElementById('SalvarNovaCategoria') as HTMLInputElement;
    
        const dados:DadosNovaCategoria = {
            'categoria': NomeNovaCategoria.value,
            'imposto': Number(ImpostoNovaCategoria.value),
        }

        const insert = new insertDados<DadosNovaCategoria>();
     
        try{
            const linhasAfetadas = await insert.insert('CadatraNovaCategoria',dados);

            if( linhasAfetadas != true){
                botao.classList.remove('btn-primary');
                botao.classList.add('btn-danger');
                botao.innerHTML = 'ERRO! Nova Categoria NÃO foi cadastrado';
                this.FormNovaCategoria.classList.remove('was-validated');

                setInterval(()=>{
                    botao.classList.add('btn-primary');
                    botao.classList.remove('btn-danger');
                    botao.innerHTML = 'Salvar';
                },5000)

                return;
            }

            botao.classList.remove('btn-primary');
            botao.classList.add('btn-success');
            botao.innerHTML = 'Novo categoria cadastrada';

            setInterval(()=>{
                botao.classList.add('btn-primary');
                botao.classList.remove('btn-success');
                botao.innerHTML = 'Salvar';
            },3000)

            this.FormNovaCategoria.reset();
            this.FormNovaCategoria.classList.remove('was-validated');
            this.MontaViewDeCategorias();

        } catch (error) {
            console.error('Ocorreu um erro:', error);
        } 
        
    }

    private async SalvarNovoProduto(event: Event)
    {
        if (!this.formNovoProduto.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            this.formNovoProduto.classList.add('was-validated');
            return
        }

        event.preventDefault();
        this.formNovoProduto.classList.add('was-validated');
        
        const NomeNovoProduto = document.getElementById('nomeProduto') as HTMLInputElement;
        const ValorNovoProduto = document.getElementById('valorProduto') as HTMLInputElement;
        const CategoriaNovoProduto = document.getElementById('SeletorCategoriaProduto') as HTMLInputElement;
        const botao = document.getElementById('SalvarNovoProduto') as HTMLInputElement;
    
        const dados:DadosNovoProduto = {
            'nome': NomeNovoProduto.value,
            'categoria': CategoriaNovoProduto.value,
            'valor': Number(ValorNovoProduto.value)
        }
        const insert = new insertDados<DadosNovoProduto>();

     
        try{
            const linhasAfetada = await insert.insert('CadatraNovoProduto',dados);

            if( linhasAfetada != true){
                botao.classList.remove('btn-primary');
                botao.classList.add('btn-danger');
                botao.innerHTML = 'ERRO! Novo produto NÃO foi cadastrado';
                this.formNovoProduto.classList.remove('was-validated');

                setInterval(()=>{
                    botao.classList.add('btn-primary');
                    botao.classList.remove('btn-danger');
                    botao.innerHTML = 'Salvar';
                },5000)

                return;
            }

            botao.classList.remove('btn-primary');
            botao.classList.add('btn-success');
            botao.innerHTML = 'Novo produto Cadastrado';

            setInterval(()=>{
                botao.classList.add('btn-primary');
                botao.classList.remove('btn-success');
                botao.innerHTML = 'Salvar';
            },3000)

            this.formNovoProduto.reset();
            this.formNovoProduto.classList.remove('was-validated');
            this.MontaViewDeProdutos();

        } catch (error) {
            console.error('Ocorreu um erro:', error);
        } 
    }


}