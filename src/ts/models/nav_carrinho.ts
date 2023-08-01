import { ImportaDados } from "../services/importaDados.js";

export class NAVCARRINHO {
    constructor()
    {
        this.AtualizaNavCarrinho();
    }

    public AtualizaNavCarrinho() {
        const service = new ImportaDados<string>();
        service.obterDados('QtdProdutosCarrinho')
            .then((produtos:string) => {
                if (produtos) {
                    let navCarrinho = document.getElementById('navCarrinho') as HTMLElement;
                    navCarrinho.innerText = `Carrinho (${produtos})`; 
                }

            })
    }
}