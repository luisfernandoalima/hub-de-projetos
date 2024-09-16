export class Imagens {
    constructor() {
        this.imagens = document.querySelectorAll('.img-project img')
    }

    selectImage() {
        console.log(this.imagens)
        this.imagens.forEach(imagem => {
            imagem.addEventListener('click', () => {
                console.log(imagem.src)
            })
        })
    }

    changeImage(linkImagem) {
        console.log("olá")
        alert(linkImagem)
    }

    clearImage() {

    }
}