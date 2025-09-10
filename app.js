// function clickBurguer() {
//     const menu = document.querySelector('.cabecalho__menu-burguer__menu');
//     menu.classList.toggle('expandido');
// }
function clickBurguer() {
    const menu = document.querySelector('.cabecalho__menu-burguer__menu');
    const icon = document.querySelector('.material-icons');

    menu.classList.toggle('expandido');

    // Mudança do ícone com animação (sem rotação)
    if (menu.classList.contains('expandido')) {
        icon.style.transform = 'scaleY(1.33) scaleX(1.65)';
    } else {
        icon.style.transform = 'scaleY(1) scaleX(1.5)';
    }
}