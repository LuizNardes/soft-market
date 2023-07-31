import { ListaDeCategorias } from "../models/lista-de-categorias.js";
import { View } from "./view.js";

export class AdmSeletorCategoriasView extends View<ListaDeCategorias>
{
    protected template(model: ListaDeCategorias): string {
    
        return `${model.lista().map(categoria => {
                    return `<option value="${categoria.Codigo}">${categoria.Categoria}</option>`;
                }).join('')}`;    
    }

}