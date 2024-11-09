document.getElementById('show-menu').addEventListener('click', () => {
    document.getElementById('show-menu').classList.toggle('active');
    document.getElementById('menu-container').classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('show-menu').classList.remove('active');
    document.getElementById('menu-container').classList.remove('active');
});


// sticky nav
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
// sticky
  


// document.addEventListener('click', (e) => {
//     if (!e.target.closest('#show-menu') && !e.target.closest('#menu-container')) {
//         document.getElementById('show-menu').classList.remove('active');
//         document.getElementById('menu-container').classList.remove('active');
//     }
// });