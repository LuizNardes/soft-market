<nav class="navbar navbar-expand-lg bg-softBlue sticky-top">
    <div class="container">
        <a class="navbar-brand text-light fw-bold" href="home">
            <span class="bg-light border rounded text-softBlue pt-1 border-end-0 align-text-bottom fst-italic">Soft</span><span class="bg-light border rounded text-softBlue pb-1 border-start-0 align-text-top fst-italic">Market</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link text-light" href="<?php echo URL ?>home">Produtos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="<?php echo URL ?>historico">Histórico</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="<?php echo URL ?>adm">Administrador</a>
                </li>
            </ul>

            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link text-light fw-bold" id="navCarrinho" href="<?php echo URL ?>carrinho">Carrinho</a>
                </li>
            </ul>
        </div>
    </div>
</nav>