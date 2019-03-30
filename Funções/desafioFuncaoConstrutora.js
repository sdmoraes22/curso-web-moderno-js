function Pessoa (nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome e ${nome}`)
    }
}

const p1 = new Pessoa('Cristiano')
p1.falar()