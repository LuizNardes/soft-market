<nav class="navbar navbar-expand-lg bg-softBlue">
    <div class="container">
        <a class="navbar-brand text-light fw-bold" href="home">SoftMarket</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link text-light" href="<?php echo URL ?>produtos">Produtos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="<?php echo URL ?>historico">Histórico</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="<?php echo URL ?>adm">Administrador</a>
                </li>
            </ul>

            <form class="d-flex w-100 mx-md-3 justify-content-center" role="search">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Pesquisar SoftMarket" aria-label="buscar" aria-describedby="botão buscar">
                    <button class="btn btn-primary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>

            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Entre
                    </a>
                    <form class="dropdown-menu p-4" style="width: 250px;">
                        <div class="mb-3">
                            <label for="UsuarioNome" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="UsuarioNome" placeholder="Usuário">
                        </div>
                        <div class="mb-3">
                            <label for="UsuaruiSenha" class="form-label">Senha</label>
                            <input type="text" class="form-control" id="UsuaruiSenha" placeholder="Usuário">
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">Entrar</button>
                        </div>
                    </form>
                </li>

                <div class="vr text-light d-none d-md-block"></div>

                <li class="nav-item">
                    <a class="nav-link text-light" aria-current="page" href="#">Carrinho</a>
                </li>
            </ul>
        </div>
    </div>
</nav>