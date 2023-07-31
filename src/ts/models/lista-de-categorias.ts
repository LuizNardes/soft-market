import { ImportaDados } from "../services/importaDados.js";
import { AdmCategoriasView } from "../views/adm-categorias-view.js";
import { AdmSeletorCategoriasView } from "../views/adm-seletor-categorias-view.js";
import { Categoria } from "./categoria.js";

export class ListaDeCategorias extends ImportaDados
{
    private categorias: Categoria[] = [];
    private categoriasView = new AdmCategoriasView('#ListaDeCategoriasADM');
    private seletorCategoriasView = new AdmSeletorCategoriasView('#SeletorCategoriaProduto');

    constructor()
    {
        super();
    }

    public montaLista(): void
    {
        this.obterDados('BuscaCategorias')
            .then(categorias => {

                if (!Array.isArray(categorias)) {
                    console.log('Os dados obtidos não são uma lista de produtos válida.');
                    // Ou, se você quiser mostrar uma mensagem na interface:
                    // this.mostrarMensagemDeErro('Os dados obtidos não são uma lista de produtos válida.');
                    return; // Sai da função caso não seja um array válido
                }

                this.LimpaLista();
                for(let categoria of categorias){
                    this.adiciona(new Categoria(
                        categoria.Codigo,
                        categoria.Categoria,
                        categoria.Imposto
                    ))
                }

                this.categoriasView.update(this);
                this.seletorCategoriasView.update(this);
            })
    }

    public adiciona(produto: Categoria) 
    {
        this.categorias.push(produto);
    }

    public lista(): Categoria[] 
    {
        return this.categorias;
    }

    
    private LimpaLista(): void
    {
        this.categorias = []
    } 

}