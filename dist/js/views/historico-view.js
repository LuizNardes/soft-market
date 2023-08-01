import { View } from "./view.js";
export class HistoricoView extends View {
    template(model) {
        let CodigoPedidoCorrente = "";
        return `
            <div class="accordion-item py-1 px-3 d-flex">
                <div class="col-3">
                    <h5 class="fw-bold">Nº Pedido</h5>
                </div>

                <div class="col-3">
                    <h5 class="fw-bold">Data</h5>
                </div>

                <div class="col-3">
                    <h5 class="fw-bold">Total Impostos</h5>
                </div>

                <div class="col-3">
                    <h5 class="fw-bold">Total</h5>
                </div>
            </div>
        ${model.lista().map((pedido) => {
            if (CodigoPedidoCorrente == pedido.CodigoPedido) {
            }
            else {
                CodigoPedidoCorrente = pedido.CodigoPedido;
                const dataPedido = this.FormataData(pedido.Data);
                const TotalCompra = this.TotalCompra(model, CodigoPedidoCorrente);
                const TotalImpostos = this.TotalImpostos(model, CodigoPedidoCorrente);
                return `
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#flush-collapse${pedido.CodigoPedido}" 
                                    aria-expanded="false" 
                                    aria-controls="flush-collapse${pedido.CodigoPedido}"
                            >
                                <div class="col-3">
                                    #${pedido.CodigoPedido}
                                </div>    
                                
                                <div class="col-3 ">
                                    ${dataPedido}
                                </div>

                                <div class="col-3">
                                    R$ ${TotalImpostos}
                                </div>

                                <div class="col-3">
                                    R$ ${TotalCompra}
                                </div>
                            </button>
                        </h2>

                        <div id="flush-collapse${pedido.CodigoPedido}" 
                            class="accordion-collapse collapse" 
                            aria-labelledby="flush-heading${pedido.CodigoPedido}" 
                            data-bs-parent="#accordionPedidos"
                            >
                            <div class="accordion-body">
                                <div class="row">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="col-2"></th>
                                                    <th scope="col" class="col-3 text-start">Descrição</th>
                                                    <th scope="col" class="col-2 text-start">Valor</th>
                                                    <th scope="col" class="col-2 text-start">Quantidade</th>
                                                    <th scope="col" class="col-2 text-start">Total Produto</th>
                                                </tr>
                                            </thead>

                                            <tbody id="content${pedido.CodigoPedido}">
                                                ${model.lista().filter(item => item.CodigoPedido === CodigoPedidoCorrente).map((item) => {
                    return `<tr>
                                                                <td class="align-middle" scope="row">
                                                                    <img src="https://picsum.photos/100/100" class="img-fluid" alt="${item.Produto}">
                                                                </td>
                                                                <th class="align-middle text-start">${item.Produto}</th>
                                                                <td class="align-bottom text-start">
                                                                    <p>R$ ${this.FormataNumero(item.Valor)}</p>
                                                                    <small class="text-body-secondary fw-light">Impostos: R$ ${this.FormataNumero(item.ImpostoDoProduto)}</small>
                                                                </td>
                                                                <td class="align-middle text-start">${item.Quantidade}</td>
                                                                <td class="align-middle text-start">R$ ${this.FormataNumero(item.Subtotal)}</td>
                                                            </tr>`;
                }).join("")}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
        })
            .join("")}`;
    }
    FormataData(data) {
        const parts = data.split("-");
        const dataFormatada = `${parts[2]}/${parts[1]}/${parts[0]}`;
        return dataFormatada;
    }
    TotalCompra(lista, CodigoPedido) {
        const subtotais = lista.lista().filter(item => item.CodigoPedido === CodigoPedido).map((item => { return item.Subtotal; }));
        const total = subtotais.reduce((acumulador, numero) => acumulador + numero, 0);
        return total.toFixed(2).toString().replace('.', ',');
    }
    TotalImpostos(lista, CodigoPedido) {
        const subtotais = lista.lista().filter(item => item.CodigoPedido === CodigoPedido).map((item => { return item.SubtotalImposto; }));
        const total = subtotais.reduce((acumulador, numero) => acumulador + numero, 0);
        return total.toFixed(2).toString().replace('.', ',');
    }
    FormataNumero(numero) {
        return numero.toFixed(2).toString().replace('.', ',');
    }
}
//# sourceMappingURL=historico-view.js.map