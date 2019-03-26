function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 12.20
    }
}

console.log(criarProduto(`Fotolivro`, 39.90))