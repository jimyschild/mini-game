const gameBoard = document.querySelector('.game-board')
const campo = document.getElementById('campo')
const boneco = document.querySelector('.boneco')
const obstaculo = document.querySelector('.obstaculo')
const começarJogo = document.getElementById('começa-jogo')
const resetJogo = document.getElementById('reseta-jogo')
const cloud = document.querySelector('.cloud')
const cloud2 = document.querySelector('.cloud2')
const distancia = document.querySelector('.distancia')

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
    const cloudPosition = cloud.offsetLeft;
    const cloud2Position = cloud2.offsetLeft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('px', '')
    
    if(obstaculoPosition <= 75 && obstaculoPosition > -20 && bonecoPosition < 50){
        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`
        cloud2.style.animation ='none'
        cloud2.style.left = `${cloud2Position}px`
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
    cloud.classList.add('clouds')
    cloud2.classList.add('clouds2') 

    let count = 0;

    setInterval(function() {
    count++;
    distancia.innerText = `Distância percorrida: ${count}`
    }, 2000);
}
começarJogo.addEventListener('click', start)

//--------reseta o jogo/recarrega a pagina

const reset = () => {
    location.reload()
}
resetJogo.addEventListener('click', reset)

//-------- distancia percorrida




