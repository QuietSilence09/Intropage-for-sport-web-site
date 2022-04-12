function toggleMenu(){
    const toggleMenu = document.querySelector('.toggle');
    const nav = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
}