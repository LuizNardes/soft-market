import { insertDados } from "../services/insertDados.js";

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
            this.EnviaParaCarrinho(codigo,quantidade.value)
        }) 
    }

    private async EnviaParaCarrinho(codigo:string,quantidade:string)
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
                alert('ERRO! Não foi possivel inserir o produto no carrinho')
            }

            console.log('sucesso');
            

        } catch (error) {
            console.error('Ocorreu um erro:', error);
        } 

    }
}