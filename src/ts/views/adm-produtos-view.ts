import { ListaDeProdutos } from "../models/lista-de-produtos.js";
import { deleteDados } from "../services/deleteDados.js";
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
                            <td class="align-middle"><i data-produto="${produto.CodigoProduto}" class="fa-regular fa-trash-can text-danger" style="cursor:pointer"></i></td>
                        </tr>
                    `;
                }).join('')}`;    
    }

    public AddEscutador():void
    {
        const iconesDelete = document.querySelectorAll(`.fa-trash-can`);
        iconesDelete.forEach((icone)=>{
            icone.addEventListener('click',async ()=>{
                try{
                    const codigo = icone.getAttribute('data-produto') as string;
                    const Deletador = new deleteDados();
                    const linhaAfetada = await Deletador.delete('DeleteProduto',codigo);

                    if(linhaAfetada != true){
                        alert('Erro. Produto não exluido');
                        return;
                    }

                    const tableRow = icone.closest('tr') as HTMLElement;
                    tableRow.remove();

                
                }catch (error) {
                    console.error('Ocorreu um erro:', error);
                } 
            

            })
        })
    }

}