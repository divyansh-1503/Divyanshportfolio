// var typed=new typed(".text1",{
//     Strings: ["Java","Web Development","Python"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop:true
// })
const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobileMenu.classList.toggle('open'); // Optional: for changing the icon
});
