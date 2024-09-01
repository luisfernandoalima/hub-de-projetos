export function pageUp() {
    const header = document.querySelector('header');

    const pageUpButton = document.querySelector('.pageUp');

    function checkVisibility() {
        // Pega a posição do header em relação ao topo da janela
        const headerBottom = header.getBoundingClientRect().bottom;

        // Verifica se o topo da página (scrollY) está além do header
        if (window.scrollY > headerBottom) {
            pageUpButton.style.right = '10px'; // Exibe o elemento
        } else {
            pageUpButton.style.right = '-150px'; // Oculta o elemento
        }
    }

    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
}