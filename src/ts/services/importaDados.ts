export class ImportaDados<T,K = void> {

    public obterDados(url:string,dados?:K): Promise<T> {
        let options: RequestInit = {};

        if (dados) {
            options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(dados),
            };
        }

        return fetch(`http://localhost:8080/src/php/${url}.php`,options)
        .then(res => res.json())
        .then((dados) => {
            return dados;
        });
    }

}