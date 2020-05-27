function clock(){
    let hour = document.querySelector('#hour')
    let min = document.querySelector('#min')
    let sec = document.querySelector('#sec')

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if(s <= 9) s = `0${s}`

    hour.innerHTML = h
    min.innerHTML = m
    sec.innerHTML = s
}
let interval = setInterval(clock, 1000)