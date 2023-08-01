import { View } from "./view.js";
export class HomeProdutosView extends View {
    template(model) {
        return `${model
            .lista()
            .map((produto) => {
            return `<div class="col">
                    <div class="card">
                        <a href="<?php echo URL ?>produto"><img src="https://picsum.photos/250/200" class="card-img-top img-fluid" alt="${produto.Nome}"></a>
                        <div class="card-body">
                            <div class="d-flex">
                                <h5 class="card-title fw-bold">R$ ${produto.Valor.toFixed(2).toString().replace('.', ',')}
                            </div>
                            <p class="card-text">${produto.Nome}</p>
                            <div class="d-flex justify-content-between flex-row">
                              <div class="col-4">
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
                              <div class="col-5">
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
//# sourceMappingURL=home-produtos-view.js.map