const helloCountry = document.querySelector('.helloCountry')
helloWorld()


function helloWorld(){
    const {getCountry} = ipApi()
    
    getCountry().then((e) => Code(e.data))

    const Code = (data)=>{
        let countryCode = data.countryCode
        Hello(countryCode).then((e) => helloCC(e.data))
    }

    function Hello(code){
        return axios.get(`https://fourtonfish.com/hellosalut/?cc=${code}`)
    }

    const helloCC = (data)=>{
        let hello = data.hello
        helloCountry.innerHTML = hello
    }
} 
// Api que diz olá na linguagem nativa
function ipApi(){
    return{
        getCountry(){
            //olá baseado no codigo do país acessado
            return axios.get(`http://ip-api.com/json/`)
        },
        getLenguage(lang){
            return axios.get(`https://fourtonfish.com/hellosalut/?lang=${lang}`)
        }
    }
}

const buttons = document.querySelectorAll('.buttonSelect')

for(let button of buttons){
    button.addEventListener('click', ()=>{
        const buttonlang = button.getAttribute('value')
        const {getLenguage} = ipApi()
        getLenguage(buttonlang).then((e) => Language(e.data))
    })
}

const Language = (data)=>{
    let hellolang = data.hello
    helloCountry.innerHTML = hellolang
}