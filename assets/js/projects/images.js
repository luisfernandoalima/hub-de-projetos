export function selectImage() {
    const imagens = document.querySelectorAll('.img-project img')
    const imagemEscolhida = document.querySelector('.img-project-active img')
    const clearImage = () => {
        imagens.forEach(img => {
            img.classList.remove('active')
        });
    }

    imagens.forEach(img => {
        img.addEventListener('click', () => {
            clearImage()
            img.classList.add('active')
            imagemEscolhida.src = img.src
        })
    });

}