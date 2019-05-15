const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(resonse => {
    const funcionarios = resonse.data
    console.log(funcionarios)
})