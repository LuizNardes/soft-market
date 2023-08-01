import { ListaDeProdutosHistorico } from "../models/lista-de-produto-historico.js";
import { ProdutoHistorico } from "../models/produto-historico.js";
import { ImportaDados } from "../services/importaDados.js";
import { HistoricoView } from "../views/historico-view.js";

export class HISTORICO
{
    private ListaDeProdutosHistorico:ListaDeProdutosHistorico = new ListaDeProdutosHistorico();
    private HistoricoView:HistoricoView = new HistoricoView('#accordionPedidos');

    constructor()
    {
        this.MontaViewDeProdutos();
    }

    private MontaViewDeProdutos():void 
    {   
        const service = new ImportaDados<ProdutoHistorico[]>();
        service.obterDados("BuscaHistorico").then((produtos: ProdutoHistorico[]) => {
          if (!Array.isArray(produtos)) {
            ////////////////////////////////////////////////////////////////////////   INCLUIR MSG HTML TELA VAZIA
            console.log("AQUI VAI O HTML DO VAZIO");
            return;
          }
    
          this.ListaDeProdutosHistorico.LimpaLista();
    
          produtos.map((produto) => {
            this.ListaDeProdutosHistorico.adiciona(
              new ProdutoHistorico(
                produto.CodigoPedido,
                produto.Produto,
                produto.CodigoProduto,
                produto.Quantidade,
                produto.Valor,
                produto.Subtotal,
                produto.Imposto,
                produto.ImpostoDoProduto,
                produto.SubtotalImposto,
                produto.Data,
                )
            );
          });
    
          this.HistoricoView.update(this.ListaDeProdutosHistorico);    
        });
      }
    
}