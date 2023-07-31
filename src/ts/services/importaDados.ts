export class ImportaDados<T> {

    public obterDados(url:string): Promise<T> {
        return fetch(`http://localhost:8080/src/php/${url}.php`)
        .then(res => res.json())
        .then((dados) => {
            return dados;
        });
    }

}