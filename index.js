const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.head3, .Six1, .Twe1');
  
  window.addEventListener('scroll', function() {
    sections.forEach(section => {
      const sectionPos = section.getBoundingClientRect().top;
      if (sectionPos < window.innerHeight - 150) {
        section.classList.add('active');
      }
    });
  });
});