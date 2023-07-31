import { ListaDeCategorias } from "../models/lista-de-categorias.js";
import { View } from "./view.js";

export class AdmCategoriasView extends View<ListaDeCategorias>
{
    protected template(model: ListaDeCategorias): string {
    
        return `${model.lista().map(categoria => {
                    return `
                        <tr>
                            <th class="align-middle" scope="row"><img src="https://picsum.photos/100"></th>
                            <td class="align-middle">${categoria.Codigo}</td>
                            <td class="align-middle">${categoria.Categoria}</td>
                            <td class="align-middle">${categoria.Imposto}%</td>
                        </tr>
                    `;
                }).join('')}`;    
    }

}