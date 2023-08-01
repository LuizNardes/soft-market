export class ImportaDados {
    obterDados(url, dados) {
        let options = {};
        if (dados) {
            options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(dados),
            };
        }
        return fetch(`http://localhost:8080/src/php/${url}.php`, options)
            .then(res => res.json())
            .then((dados) => {
            return dados;
        });
    }
}
//# sourceMappingURL=importaDados.js.map