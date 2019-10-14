const aboutMeheader = document.querySelector('.about-me');
const text = document.querySelector('.about-me .text');

aboutMeheader.addEventListener('click', function() {
    text.classList.toggle('hidden');
});
