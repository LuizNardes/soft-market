import { ImportaDados } from "../services/importaDados.js";
export class NAVCARRINHO {
    constructor() {
        this.AtualizaNavCarrinho();
    }
    AtualizaNavCarrinho() {
        const service = new ImportaDados();
        service.obterDados('QtdProdutosCarrinho')
            .then((produtos) => {
            if (produtos) {
                let navCarrinho = document.getElementById('navCarrinho');
                navCarrinho.innerText = `Carrinho (${produtos})`;
            }
        });
    }
}
//# sourceMappingURL=nav_carrinho.js.map