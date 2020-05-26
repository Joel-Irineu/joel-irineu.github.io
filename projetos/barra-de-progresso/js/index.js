let progress = document.querySelector('#progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = ()=>{
    let progressHeight = (window.pageYOffset / totalHeight) * 100

    progress.style.width = `${progressHeight}%`
}