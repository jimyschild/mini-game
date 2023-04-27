const gameBoard = document.querySelector('.game-board')
const campo = document.getElementById('campo')
const boneco = document.querySelector('.boneco')
const obstaculo = document.querySelector('.obstaculo')
const começarJogo = document.getElementById('começa-jogo')
const resetJogo = document.getElementById('reseta-jogo')

//-------pulo
const jump = () => {
    boneco.classList.add('jump')

    setTimeout(() =>{
        boneco.classList.remove('jump')
    },600)
}
gameBoard.addEventListener('click', jump)
//--------movimento osbataculo
const loop = setInterval(() => {

    const obstaculoPosition = obstaculo.offsetLeft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('px', '')
    
    if(obstaculoPosition <= 75 && obstaculoPosition > -20 && bonecoPosition < 50){
        obstaculo.style.animation = 'none'
        obstaculo.style.left = `${obstaculoPosition}px`
        boneco.style.animation = 'none'
        boneco.style.bottom = `${bonecoPosition}px`
        boneco.style.border = 'solid 2px #000706'
        boneco.style.boxShadow = '0px 0px 10px var(--color1), 0px 0px 25px var(--color1) inset'

    }
   
}, 10)


//--------Começar o jogo
const start = () => {
    obstaculo.classList.add('começar')
}
começarJogo.addEventListener('click', start)

//--------reseta o jogo/recarrega a pagina
const reset = () => {
    location.reload()
}
resetJogo.addEventListener('click', reset)

//-------- distancia percorrida
const divDistancia =() => {
    
    let distancia = document.createElement('div')
    campo.appendChild(distancia)
    distancia.style.border = '2px solid green'
    distancia.style.width = '250px'
    distancia.style.height = '30px'
    distancia.style.marginTop = '-536px'
    distancia.style.marginLeft = '100px'
    distancia.style.fontSize = '21px'
    distancia.innerText = `Distância percorrida:`
    return distancia
}
divDistancia()