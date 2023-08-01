export class updateDados {
    update(content, id, tabela, coluna) {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({ 'id': id, 'tabela': tabela, 'content': content, 'coluna': coluna })
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
//# sourceMappingURL=updateDados.js.map