var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deleteDados } from "../services/deleteDados.js";
import { View } from "./view.js";
export class AdmCategoriasView extends View {
    template(model) {
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
    AddEscutador() {
        const iconesDelete = document.querySelectorAll(`.fa-trash-can`);
        iconesDelete.forEach((icone) => {
            icone.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const codigo = icone.getAttribute('data-categoria');
                    const Deletador = new deleteDados();
                    const linhaAfetada = yield Deletador.delete('DeleteCategoria', codigo);
                    if (linhaAfetada != true) {
                        const celula = icone.parentNode;
                        celula.innerHTML = 'Essa Categoria ainda tem Produtos vinculados a ela';
                        setInterval(() => {
                            celula.innerHTML = '<i data-produto="${categoria.Codigo}" class="fa-regular fa-trash-can text-danger" style="cursor:pointer"></i>';
                        }, 5000);
                        return;
                    }
                    const tableRow = icone.closest('tr');
                    tableRow.remove();
                }
                catch (error) {
                    console.error('Ocorreu um erro:', error);
                }
            }));
        });
    }
}
//# sourceMappingURL=adm-categorias-view%20copy.js.map