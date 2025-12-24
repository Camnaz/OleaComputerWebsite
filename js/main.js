/**
 * Olea Computer Website - Main JavaScript
 */

// ==========================================================================
// Analytics
// ==========================================================================

import { inject } from '@vercel/analytics';

inject();

// ==========================================================================
// Navigation
// ==========================================================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect
let lastScrollY = window.scrollY;

function handleNavbarScroll() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// Mobile navigation toggle
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile nav when clicking a link
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ==========================================================================
// Smooth Scroll
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================================================
// Fade-in Animation on Scroll
// ==========================================================================

const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});

// ==========================================================================
// Newsletter Form
// ==========================================================================

const newsletterForm = document.getElementById('newsletterForm');

newsletterForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const input = newsletterForm.querySelector('input[type="email"]');
  const button = newsletterForm.querySelector('button');
  const email = input.value;
  
  // Simple validation
  if (!email || !email.includes('@')) {
    return;
  }
  
  // Open mail client to send to hello@oleacomputer.com (routes to cnazarko@icloud.com)
  const subject = 'Newsletter signup';
  const body = `Hi Olea team,%0A%0APlease add me to the newsletter.%0AEmail: ${encodeURIComponent(email)}%0A%0AThank you!`;
  window.location.href = `mailto:hello@oleacomputer.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});

// ==========================================================================
// Particle Animation Enhancement
// ==========================================================================

const particles = document.querySelectorAll('.particle');

particles.forEach((particle, index) => {
  // Randomize particle sizes slightly
  const size = 3 + Math.random() * 4;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Add subtle opacity variation
  particle.style.opacity = 0.1 + Math.random() * 0.15;
});

// ==========================================================================
// Performance: Reduce animations when not visible
// ==========================================================================

let animationsEnabled = true;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    animationsEnabled = false;
    document.body.style.setProperty('--animation-state', 'paused');
  } else {
    animationsEnabled = true;
    document.body.style.setProperty('--animation-state', 'running');
  }
});

// ==========================================================================
// Console Easter Egg
// ==========================================================================

console.log(
  '%c🫒 Olea Computer',
  'font-size: 24px; font-weight: bold; color: #2F4B3F;'
);
console.log(
  '%cBuilding the infrastructure for autonomous intelligence.',
  'font-size: 12px; color: #6B7D72;'
);
console.log(
  '%cInterested in what we\'re building? Join us → hello@oleacomputer.com',
  'font-size: 11px; color: #6B7D72;'
);
