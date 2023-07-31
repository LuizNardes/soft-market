import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { View } from "./view.js";

export class AdmProdutosView extends View<ListaDeProdutos>
{
    protected template(model: ListaDeProdutos): string {
    
        return `${model.lista().map(produto => {
                    return `
                        <tr>
                            <th class="align-middle" scope="row"><img src="https://picsum.photos/100"></th>
                            <td class="align-middle">${produto.CodigoProduto}</td>
                            <td class="align-middle">${produto.Nome}</td>
                            <td class="align-middle">${produto.Categoria}</td>
                            <td class="align-middle">R$ ${produto.Valor}</td>
                            <td class="align-middle">${produto.Imposto}%</td>
                            <td class="align-middle">R$ ${produto.Valor * (produto.Imposto/100)}</td>
                        </tr>
                    `;
                }).join('')}`;    
    }

}