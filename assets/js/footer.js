export function emailCopy (){
    document.querySelector('.meuEmail').addEventListener("click", function(){
        const texto = document.querySelector('.meuEmail')

        const selection = window.getSelection()
        const intervalo = document.createRange()

        intervalo.selectNodeContents(texto)
        selection.removeAllRanges()
        selection.addRange(intervalo)

        document.execCommand('copy')

        selection.removeAllRanges()

        alert(`O email foi copiado`)
    })
}