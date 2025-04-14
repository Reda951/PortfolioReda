/**
 * Script pour la page Veille 
 * Portfolio de Reda Aboudi
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Variables globales =====
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const backToTop = document.querySelector('.back-to-top');
    
    // ===== Navigation mobile =====
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
      
      // Fermer le menu en cliquant sur un lien
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuToggle.classList.remove('active');
        });
      });
    }
    
    // ===== Défilement fluide =====
    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // Ajustement pour la hauteur du header
          behavior: 'smooth'
        });
      }
    };
    
    // Écouteur pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
      });
    });
    
    // ===== Observer les éléments qui entrent dans la vue =====
    const setupIntersectionObserver = () => {
      // Configuration de l'observateur
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };
      
      // Fonction de callback
      const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Activer l'élément
            target.classList.add('active');
            
            // Ne plus observer cet élément
            observer.unobserve(target);
          }
        });
      };
      
      // Créer l'observateur
      const observer = new IntersectionObserver(handleIntersect, options);
      
      // Observer les éléments
      document.querySelectorAll('.reveal-element').forEach(element => {
        observer.observe(element);
      });
      
      return observer;
    };
    
    // ===== Header sticky et bouton "retour en haut" =====
    const handleScroll = () => {
      // Header sticky
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Bouton retour en haut
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };
    
    // ===== Animation d'entrée des cartes de veille =====
    const animateVeilleCards = () => {
      const cards = document.querySelectorAll('.veille-card');
      
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 150 * index);
        }, 0);
      });
    };
    
    // ===== Initialisation =====
    const init = () => {
      // Rendre immédiatement visibles les éléments avec la classe reveal-element
      document.querySelectorAll('.reveal-element').forEach(el => {
        el.classList.add('active');
      });
      
      // Configurer l'observateur d'intersection
      const observer = setupIntersectionObserver();
      
      // Gérer le défilement
      window.addEventListener('scroll', handleScroll);
      
      // Vérifier l'état initial
      handleScroll();
      
      // Animation au chargement de la page
      document.body.classList.add('loaded');
      
      // Initialiser le bouton retour en haut
      if (backToTop) {
        backToTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
      
      // Lancer les animations après un court délai
      setTimeout(animateVeilleCards, 300);
    };
    
    // Lancer l'initialisation
    init();
  });