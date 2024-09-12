const imgHub = document.querySelector('.hub-de-rede')
const imgContatos = document.querySelector('.img-contatos')

const verificarLargura = () => {
    if(window.innerWidth < 767){
        imgHub.style.display = "none"
        imgContatos.style.display = "none"
    } else{
        imgHub.style.display = "block"
        imgContatos.style.display = "block"

    }

}

window.addEventListener('scroll', verificarLargura)
window.addEventListener('resize', verificarLargura)

verificarLargura()