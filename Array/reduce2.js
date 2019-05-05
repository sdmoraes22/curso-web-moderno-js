const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

//Desafio1 Todos os alunos são bolsistas?
//const eBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
//    if(resultado && bolsista) {
//        return true
//    }
//})
//console.log(eBolsista)

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Desafio2 Algum aluno é bolsista bolsistas?
//const possuiBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
//    if(resultado || bolsista) {
//        return true
//    }
//})
//console.log(possuiBolsista)

const possuiBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(possuiBolsistas))
