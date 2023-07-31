import { ListaDeCategorias } from "../models/lista-de-categorias.js";
import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { insertDados } from "../services/insertDados.js";

export class ADM
{
    private listaDeProdutos =  new ListaDeProdutos();
    private listaDeCategorias = new ListaDeCategorias();
    private formNovoProduto = document.getElementById('FormNovoItem') as HTMLFormElement;

    constructor()
    {
        this.listaDeProdutos.montaLista();
        this.listaDeCategorias.montaLista();
        this.formNovoProduto.addEventListener('submit', this.SalvarNovoProduto.bind(this));
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
        const insert = new insertDados();

     
        try{
            const linhasAfetada = await insert.insert('CadatraNovoProduto',dados);
            console.log(linhasAfetada);
            

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
            this.listaDeProdutos.montaLista();

        } catch (error) {
            console.error('Ocorreu um erro:', error);
        } finally {
            
        }
        
        
    }


}