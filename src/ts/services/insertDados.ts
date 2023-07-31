export class insertDados
{
    public insert(url:string,dados:DadosNovoProduto): Promise<any>
    {   

        console.log(dados);
        

        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(dados)
        };

        return fetch(`http://localhost:8080/src/php/${url}.php`, options)
          .then(response => response.json()) 
          .then(response => {
            return response;
          })
          .catch(error => {
            console.error('Ocorreu um erro:', error);
          });
    }
}

