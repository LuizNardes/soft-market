import { ListaDeCategorias } from "../models/lista-de-categorias.js";
import { deleteDados } from "../services/deleteDados.js";
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
                            <td class="align-middle"><i data-categoria="${categoria.Codigo}" class="fa-regular fa-trash-can text-danger" style="cursor:pointer"></i></td>
                        </tr>
                    `;
                }).join('')}`;    
    }

    public AddEscutador():void
    {
        const iconesDelete = document.querySelectorAll(`.fa-trash-can`);
        iconesDelete.forEach((icone)=>{
            this.Escutador(icone);
           
        })
    }

    private Escutador(icone:Element):void{
        icone.addEventListener('click',async ()=>{
            try{
                const codigo = icone.getAttribute('data-categoria') as string;
                const Deletador = new deleteDados();
                const linhaAfetada = await Deletador.delete('DeleteCategoria',codigo);

                if(linhaAfetada != true){
                    const celula = icone.parentNode as HTMLElement;
                    celula.innerHTML = '<span class="text-danger">Essa Categoria ainda tem Produtos vinculados a ela</span>';
                    setInterval(()=>{
                        celula.innerHTML = '<i data-produto="${categoria.Codigo}" class="fa-regular fa-trash-can text-danger" style="cursor:pointer"></i>';
                        
                        const novoIcone = document.createElement('i');
                        novoIcone.setAttribute('data-categoria', codigo);
                        novoIcone.className = 'fa-regular fa-trash-can text-danger';
                        novoIcone.style.cursor = 'pointer';
        
                        celula.innerHTML = '';
                        celula.appendChild(novoIcone);
                        this.Escutador(novoIcone);
                    
                    },5000)
                    return;
                }
                
                const tableRow = icone.closest('tr') as HTMLElement;
                tableRow.remove();

            
            }catch (error) {
                console.error('Ocorreu um erro:', error);
            } 
        

        })
    }

}