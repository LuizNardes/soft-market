import { ListaDeProdutosCarrinho } from "../models/lista-de-produtos-carrinho.js";
import { updateDados } from "../services/updateDados.js";
import { View } from "./view.js";

export class CarrinhoProdutosView extends View<ListaDeProdutosCarrinho> {

    private Total:number;
    private TotalImposto:number;
  
    protected template(model: ListaDeProdutosCarrinho): string {
    return `${model
      .lista()
      .map((produto) => {
        return `<li class="list-group-item d-flex">
                    <div class="col-2">
                        <img src="https://picsum.photos/100" alt="">
                    </div>
                    <div class="col-5 d-flex flex-column">
                        <h5 class="fw-bold">${produto.Produto}</h5>
                        <span class="mt-auto link-primary delete-produto" data-id="${produto.ID}" style="cursor:pointer">Excluir</span>
                    </div>
                    <div class="col-3 px-5 d-flex align-items-center justify-content-center flex-column">
                        <select id="qtd-${produto.CodigoProduto}" class="form-select quantidade-produto" data-id="${produto.ID}" aria-label="Quantidade">
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div class="col-2 d-flex align-items-center justify-content-center flex-column">
                        <div class="d-flex">
                            <h5 class="card-title fw-bold">R$ ${(produto.Valor * produto.Qtd).toFixed(2).toString().replace('.',',')}</h5>
                        </div>
                        <small id="imposto-${produto.CodigoProduto}" class="fw-lighter">Impostos: R$ 00,00</small>
                    </div>
                </li>`;
      })
      .join("")}`;
  }

  public SetQuantidades(produtos: ListaDeProdutosCarrinho):void
  {
    produtos.lista().forEach(produto => {
        let quantidade= document.getElementById(`qtd-${produto.CodigoProduto}`) as HTMLInputElement;
        if(produto.Qtd > 10)
        {
            quantidade.value = '10';
            let aviso = document.createElement("small");
            aviso.textContent = "Estoque: 10";
            quantidade.parentElement?.appendChild(aviso);
            
            const atualiza = new updateDados();
            atualiza.update('10',produto.ID,'carrinho','quantidade');
            return
        }
        quantidade.value = produto.Qtd.toString(); 
    })
  }

  public CalculaTotais(produtos: ListaDeProdutosCarrinho):void
  {
    this.Total = 0;
    this.TotalImposto = 0;

    produtos.lista().forEach(produto => {
        const totalProduto = produto.Valor * produto.Qtd;

        this.Total = this.Total + totalProduto;

        const percentualImpostoProduto = totalProduto * (produto.Imposto / 100);

        let impostoProdutoView = document.getElementById(`imposto-${produto.CodigoProduto}`) as HTMLElement;
        impostoProdutoView.innerHTML = `Impostos: R$ ${percentualImpostoProduto.toFixed(2).toString().replace('.',',')}`;

        this.TotalImposto = this.TotalImposto + percentualImpostoProduto;

    })

    const subtotal = document.getElementById('subtotalCarrinho') as HTMLElement;
    subtotal.innerText = `Total: R$ ${this.Total.toFixed(2).toString().replace('.',',')}`;

    const impostoCarrinho = document.getElementById('impostoCarrinho') as HTMLElement;
    impostoCarrinho.innerText = `Total Impostos: R$ ${this.TotalImposto.toFixed(2).toString().replace('.',',')}`;
  }

}
