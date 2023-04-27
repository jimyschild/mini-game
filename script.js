const gameBoard = document.querySelector('.game-board')
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
document.addEventListener('click', jump)
//--------movimento osbataculo
const loop = setInterval(() => {

    const obstaculoPosition = obstaculo.offsetLeft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('px', '')

    if(obstaculoPosition <= 75 && obstaculoPosition > -20 && bonecoPosition < 50){
        obstaculo.style.animation = 'none'
        obstaculo.style.left = `${obstaculoPosition}px`
        boneco.style.animation = 'none'
        boneco.style.bottom = `${bonecoPosition}px`
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
    gameBoard.appendChild(distancia)
    distancia.style.border = '2px solid green'
    distancia.style.width = '200px'
    distancia.style.height = '20px'
    distancia.style.marginTop = '100px'
    distancia.style.marginLeft = '50px'
    distancia.innerText = `Distância percorrid`
    return distancia
}
divDistancia()