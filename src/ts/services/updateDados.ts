export class updateDados
{
    public update(content:string,id:string,tabela:string,coluna:string): Promise<boolean|string>
    {   
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({'id':id,'tabela':tabela,'content':content,'coluna':coluna})
        };

        return fetch(`http://localhost:8080/src/php/UpdateTabela.php`, options)
          .then(response => response.json()) 
          .then(response => {
            return response;
          })
          .catch(error => {
            console.error('Ocorreu um erro:', error);
          });
    }
}