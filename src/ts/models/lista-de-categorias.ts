import { AdmSeletorCategoriasView } from "../views/adm-seletor-categorias-view.js";
import { Categoria } from "./categoria.js";

export class ListaDeCategorias
{
    private categorias: Categoria[] = [];

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