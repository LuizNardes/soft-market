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
export class AdmProdutosView extends View {
    template(model) {
        return `${model.lista().map(produto => {
            return `
                        <tr>
                            <th class="align-middle" scope="row"><img src="https://picsum.photos/100"></th>
                            <td class="align-middle">${produto.CodigoProduto}</td>
                            <td class="align-middle">${produto.Nome}</td>
                            <td class="align-middle">${produto.Categoria}</td>
                            <td class="align-middle">R$ ${produto.Valor}</td>
                            <td class="align-middle">${produto.Imposto}%</td>
                            <td class="align-middle">R$ ${produto.Valor * (produto.Imposto / 100)}</td>
                            <td class="align-middle"><i data-produto="${produto.CodigoProduto}" class="fa-regular fa-trash-can text-danger" style="cursor:pointer"></i></td>
                        </tr>
                    `;
        }).join('')}`;
    }
    AddEscutador() {
        const iconesDelete = document.querySelectorAll(`.fa-trash-can`);
        iconesDelete.forEach((icone) => {
            icone.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const codigo = icone.getAttribute('data-produto');
                    const Deletador = new deleteDados();
                    const linhaAfetada = yield Deletador.delete('DeleteProduto', codigo);
                    if (linhaAfetada != true) {
                        alert('Erro. Produto não exluido');
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
//# sourceMappingURL=adm-produtos-view.js.map