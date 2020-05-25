const consultarCep = document.querySelector('.consultarCep')
const rua = document.querySelector('.rua')
const bairro = document.querySelector('.bairro')
const cidade = document.querySelector('.cidade')
const uf = document.querySelector('.uf')


consultarCep.addEventListener('click', buscarCep)

function buscarCep(){
    const cep = document.querySelector('.inputCep').value
    Api(cep).then((e) => Data(e.data))

    const datas = document.querySelector('.datas')
    datas.classList.add('active')
} 

function Api(cep){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}

const Data = (data)=>{
    let endereco = {
        bairro: data.bairro,
        cidade: data.localidade,
        logradouro: data.logradouro,
        uf: data.uf
    }

    rua.innerHTML = endereco.logradouro
    bairro.innerHTML = endereco.bairro
    cidade.innerHTML = endereco.cidade
    uf.innerHTML = endereco.uf
}
