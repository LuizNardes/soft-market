import { insertDados } from "../services/insertDados.js";
import { NAVCARRINHO } from "./nav_carrinho.js";

export class EnviaParaCarrinho
{

    public AddEscutador()
    {       
        const iconesDelete = document.querySelectorAll(`.compraProduto`);
        iconesDelete.forEach((botao)=>{
            this.Escutador(botao); 
        })
    }

    private Escutador(botao:Element)
    {
        const codigo = botao.getAttribute('data-produto') as string;
        const quantidade = document.getElementById(`qtd-${codigo}`) as HTMLInputElement;

        botao.addEventListener('click', ()=>{
            this.EnviaParaCarrinho(codigo,quantidade.value,botao)
        }) 
    }

    private async EnviaParaCarrinho(codigo:string,quantidade:string,botao:Element)
    {
        interface dado
        {
            codigo:string
            quantidade:string
        }
        const dados = {
            'codigo': codigo,
            'quantidade': quantidade
        }

        const conexao = new insertDados<dado>();
        try{
            const linhaAfetada = await conexao.insert('EnviaParaCarrinho',dados);

            if(linhaAfetada != true)
            {
                botao.classList.remove('btn-primary');
                botao.classList.add('btn-danger');
                botao.innerHTML = 'Erro <i class="fa-solid fa-circle-exclamation"></i>';
                return;
            }

            new NAVCARRINHO();
            botao.classList.remove('btn-primary');
            botao.classList.add('btn-success');
            botao.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(()=>{
                botao.classList.remove('btn-success');
                botao.classList.add('btn-primary');
                botao.innerHTML = 'Comprar <i class="fa-solid fa-cart-shopping"></i>';
            },1500  );
            
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        } 

    }
}