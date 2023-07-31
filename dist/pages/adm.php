<div class="container mt-5">
    <div class="row">
        <div class="col-12">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-produtos-tab" data-bs-toggle="tab" data-bs-target="#nav-produtos" type="button" role="tab" aria-controls="nav-produtos" aria-selected="true">
                        Produtos
                    </button>
                    <button class="nav-link" id="nav-categorias-tab" data-bs-toggle="tab" data-bs-target="#nav-categorias" type="button" role="tab" aria-controls="nav-categorias" aria-selected="false">
                        Categorias
                    </button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-produtos" role="tabpanel" aria-labelledby="nav-produtos-tab" tabindex="0">
                    <div class="card border-0">
                        <div class="card-body">
                            <div class="card-title d-flex justify-content-end">
                                <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#ModalAddProduto">Novo Produto <i class="fa-solid fa-circle-plus"></i></button>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Código</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Valor</th>
                                            <th scope="col">Imposto</th>
                                            <th scope="col">Valor Imposto</th>
                                        </tr>
                                    </thead>
                                    <tbody id="ListaDeProdutosADM">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-categorias" role="tabpanel" aria-labelledby="nav-categorias-tab" tabindex="0">
                    <div class="card border-0">
                        <div class="card-body">
                            <div class="card-title d-flex justify-content-end">
                                <button class="btn btn-outline-success">Nova Categoria <i class="fa-solid fa-circle-plus"></i></button>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Código</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Imposto</th>
                                        </tr>
                                    </thead>
                                    <tbody id="ListaDeCategoriasADM">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="ModalAddProduto" tabindex="-1" aria-labelledby="ModalAddProdutoLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="ModalAddProdutoLabel">Novo Produto</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="post" id="FormNovoItem" class="needs-validation" novalidate>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="nomeProduto" placeholder="Produto" required>
                                <label for="nomeProduto">Nome do produto</label>
                                <div class="invalid-feedback">
                                    Por favor, informe o Nome do Produto.
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="valorProduto" placeholder="10" required>
                                <label for="valorProduto">Valor Produto</label>
                                <div class="invalid-feedback">
                                    Por favor, informe o Valor do Produto.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <select class="form-select" id="SeletorCategoriaProduto" aria-label="Floating label select example" required>
                            <option selected>Categoria</option>
                        </select>
                        <label for="SeletorCategoriaProduto">Categoria</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button id="SalvarNovoProduto" type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</div>


<script src="<?php echo URL; ?>dist/js/ADM_app.js" type="module"></script>