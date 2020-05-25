const  ipsum = `Hodor... Hodor hodor. HODOR hodor, hodor. Hodor, hodor. Hodor. Hodor. Hodor! Hodor hodor. Hodor, hodor, hodor hodor. Hodor, hodor, hodor hodor. Hodor... Hodor hodor. Hodor hodor!`
const paragraphs = document.querySelector('.paragraphs')
const text = document.querySelector('.text')
const generateText = document.querySelector('.generateText')
let textFinish = []
const copy = document.querySelector('.copy')
const button = document.querySelector('.button')

generateText.addEventListener('click', ()=>{
   let paragraphsNumber = paragraphs.value
   for(let i = 1; i <= paragraphsNumber; i++){
        textFinish[i] = `${ipsum}\n\n`
   }
   

    text.value = textFinish.join('')
    textFinish = []
})

copy.addEventListener('click', ()=>{
    text.select()
    document.execCommand('copy')
})
