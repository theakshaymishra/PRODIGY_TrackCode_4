// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
document.querySelector('.theme-switcher').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

