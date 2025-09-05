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

// Fechar menu ao clicar em um link
// document.querySelectorAll('.cabecalho__menu-burguer__menu__link').forEach(link => {
//     link.addEventListener('click', () => {
//         const menu = document.getElementById('menu');
//         const icon = document.querySelector('.material-icons');

//         if (menu.classList.contains('expandido')) {
//             menu.classList.remove('expandido');
//             icon.style.transform = 'scale(1)';
//             // icon.textContent = 'menu';
//         }
//     });
// });

// Fechar menu ao pressionar ESC
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         const menu = document.getElementById('menu');
//         const icon = document.querySelector('.material-icons');

//         if (menu.classList.contains('expandido')) {
//             menu.classList.remove('expandido');
//             icon.style.transform = 'scale(1)';
//             // icon.textContent = 'menu';
//         }
//     }
// });