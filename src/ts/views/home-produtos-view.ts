import { ListaDeProdutos } from "../models/lista-de-produtos";
import { View } from "./view.js";

export class HomeProdutosView extends View<ListaDeProdutos> {
  protected template(model: ListaDeProdutos): string {
    return `${model
      .lista()
      .map((produto) => {
        return `<div class="col">
                    <div class="card">
                        <img src="https://picsum.photos/250/200" class="card-img-top img-fluid p-4 " alt="${produto.Nome}">
                        <div class="card-body">
                            <div class="d-flex">
                                <h5 class="card-title fw-bold">R$ ${produto.Valor.toFixed(2).toString().replace('.',',')}
                            </div>
                            <p class="card-text">${produto.Nome}</p>
                            <div class="d-flex justify-content-between flex-column">
                              <div class="col-12">
                                      <select class="form-select" id="qtd-${produto.CodigoProduto}" aria-label="Quantidade">
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
                              <div class="col-12 mt-3 ">
                                  <button class="compraProduto btn btn-primary ms-auto w-100" data-produto="${produto.CodigoProduto}">
                                    Comprar <i class="fa-solid fa-cart-shopping"></i>
                                  </button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      })
      .join("")}`;
  }
}
