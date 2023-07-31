export class ImportaDados {
    obterDados(url) {
        return fetch(`http://localhost:8080/src/php/${url}.php`)
            .then(res => res.json())
            .then((dados) => {
            return dados;
        });
    }
}
//# sourceMappingURL=importaDados.js.map