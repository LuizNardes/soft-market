import { ListaDeProdutosHistorico } from "../models/lista-de-produto-historico.js";
import { NAVCARRINHO } from "../models/nav_carrinho.js";
import { ProdutoHistorico } from "../models/produto-historico.js";
import { ImportaDados } from "../services/importaDados.js";
import { HistoricoView } from "../views/historico-view.js";
export class HISTORICO {
    constructor() {
        this.ListaDeProdutosHistorico = new ListaDeProdutosHistorico();
        this.HistoricoView = new HistoricoView('#accordionPedidos');
        this.NavCarrinho = new NAVCARRINHO();
        this.MontaViewDeProdutos();
    }
    MontaViewDeProdutos() {
        const service = new ImportaDados();
        service.obterDados("BuscaHistorico").then((produtos) => {
            if (!Array.isArray(produtos)) {
                console.log("AQUI VAI O HTML DO VAZIO");
                return;
            }
            this.ListaDeProdutosHistorico.LimpaLista();
            produtos.map((produto) => {
                this.ListaDeProdutosHistorico.adiciona(new ProdutoHistorico(produto.CodigoPedido, produto.Produto, produto.CodigoProduto, produto.Quantidade, produto.Valor, produto.Subtotal, produto.Imposto, produto.ImpostoDoProduto, produto.SubtotalImposto, produto.Data));
            });
            this.HistoricoView.update(this.ListaDeProdutosHistorico);
        });
    }
}
//# sourceMappingURL=historico_controller.js.map