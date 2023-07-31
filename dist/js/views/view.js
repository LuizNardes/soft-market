export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
            this.elemento.innerHTML = '';
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    update(model) {
        let template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map