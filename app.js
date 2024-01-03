let bar = document.getElementById('bars')
let barChild = document.getElementById('bars-child')
let navbar = document.querySelector('.header-navs')
let navbarChild = navbar.querySelector('ul')

bar.addEventListener('click',()=>{
    barChild.classList.toggle('fa-times')
    navbar.classList.toggle('active')
    
    navbar.classList.toggle('navActive')
})

window.onscroll=()=>{
    navbar.classList.remove('fa-times')
    navbar.classList.remove('navActive')
}

document.querySelector('#search-icon').addEventListener('click',function(){
    document.querySelector('#search-form').classList.toggle('navActive');
})
document.querySelector('#search-close').addEventListener('click',function(){
    document.querySelector("#search-form").classList.remove('navActive')
})



// loader 
function loader(){
    document.querySelector('.loader-container').classList.add('fade')
}
function fadeOut (){
    setInterval(loader,1500)
}
window.onload = fadeOut();





// document.addEventListener('DOMContentLoaded', function () {
//     var navLinks = document.querySelectorAll('.nav-link');
//     var sections = document.querySelectorAll('.home');

//     window.addEventListener('scroll', function () {
//         var currentSectionId = null;

//         sections.forEach(function (section) {
//             var rect = section.getBoundingClientRect();

//             if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//                 currentSectionId = section.id;
//             }
//         });

//         navLinks.forEach(function (link) {
//             // link.classList.remove('active');
//             if (link.getAttribute('href') === '#' + currentSectionId) {
//                 link.classList.add('active');
//             }
//         });
//     });
// });