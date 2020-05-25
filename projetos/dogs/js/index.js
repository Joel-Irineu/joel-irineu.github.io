const img = document.querySelector('.img')
const btn = document.querySelector('.btn')

btn.addEventListener('click', randonDog)


function randonDog(){
    axios.get('https://dog.ceo/api/breeds/image/random').then((e) => dogUrl(e.data))
}

function dogUrl(dog){
   const url = dog.message
   img.src = url
}

randonDog()