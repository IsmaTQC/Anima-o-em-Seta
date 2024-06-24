let aba    = document.querySelector('#aba')
let gaveta = document.querySelector(".container")
let img = document.querySelector("#img")


aba.addEventListener('click', ()=>{
    gaveta.classList.toggle('active')
    if(gaveta.classList.contains('active')){
        img.setAttribute("src", "seta-direita.png")
    }else{
        img.setAttribute("src", "seta-esquerda.png")
    }
})