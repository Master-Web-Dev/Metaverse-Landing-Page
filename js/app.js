const bars = document.querySelector('.bars');
const navBar = document.querySelector('.navBar');

bars.addEventListener('click', () => {
    bars.classList.toggle('active');
    navBar.classList.toggle('active');
})