// Mobile menu toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    mobileNav.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Highlight nav links on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Hover effects for social/contact links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = 'var(--eco-orange)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = '#d1d5db';
    });
  });
  document.querySelectorAll('#contacto .card a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = 'var(--eco-green)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = 'var(--gray-600)';
    });
  });
});
