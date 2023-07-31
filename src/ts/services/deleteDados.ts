export class deleteDados
{
    public delete(url:string,dados:string): Promise<boolean|string>
    {   
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({'id':dados})
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