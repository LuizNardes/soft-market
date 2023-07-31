var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { insertDados } from "../services/insertDados.js";
export class EnviaParaCarrinho {
    AddEscutador() {
        const iconesDelete = document.querySelectorAll(`.compraProduto`);
        iconesDelete.forEach((botao) => {
            this.Escutador(botao);
        });
    }
    Escutador(botao) {
        const codigo = botao.getAttribute('data-produto');
        const quantidade = document.getElementById(`qtd-${codigo}`);
        botao.addEventListener('click', () => {
            this.EnviaParaCarrinho(codigo, quantidade.value);
        });
    }
    EnviaParaCarrinho(codigo, quantidade) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = {
                'codigo': codigo,
                'quantidade': quantidade
            };
            const conexao = new insertDados();
            try {
                const linhaAfetada = yield conexao.insert('EnviaParaCarrinho', dados);
                if (linhaAfetada != true) {
                    alert('ERRO! Não foi possivel inserir o produto no carrinho');
                }
                console.log('sucesso');
            }
            catch (error) {
                console.error('Ocorreu um erro:', error);
            }
        });
    }
}
//# sourceMappingURL=envia-para-carrinho.js.map