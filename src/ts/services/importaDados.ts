export abstract class ImportaDados {

    public obterDados(url:string): Promise<any> {
        return fetch(`http://localhost:8080/src/php/${url}.php`)
        .then(res => res.json())
        .then((dados) => {
            return dados;
        });
    }

}