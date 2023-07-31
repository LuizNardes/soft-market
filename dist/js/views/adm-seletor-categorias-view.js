import { View } from "./view.js";
export class AdmSeletorCategoriasView extends View {
    template(model) {
        return `${model.lista().map(categoria => {
            return `<option value="${categoria.Codigo}">${categoria.Categoria}</option>`;
        }).join('')}`;
    }
}
//# sourceMappingURL=adm-seletor-categorias-view.js.map