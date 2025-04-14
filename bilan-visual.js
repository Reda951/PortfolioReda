/**
 * Script pour les effets visuels de la page Bilan
 * Portfolio de Reda Aboudi
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Variables globales =====
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const backToTop = document.querySelector('.back-to-top');
    const terminal = document.querySelector('.terminal');
    
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
    
    // ===== Effets pour les boutons du terminal =====
    const setupTerminalButtons = () => {
      const buttons = document.querySelectorAll('.terminal-btn');
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          // Effet de lueur sur les dots du terminal
          document.querySelectorAll('.dot').forEach(dot => {
            dot.style.boxShadow = `0 0 10px ${getComputedStyle(dot).backgroundColor}`;
          });
        });
        
        button.addEventListener('mouseleave', () => {
          // Réinitialiser l'effet des dots
          document.querySelectorAll('.dot').forEach(dot => {
            dot.style.boxShadow = 'none';
          });
        });
        
        // Effet de clic
        button.addEventListener('click', () => {
          // Animation de pulse pour le bouton cliqué
          button.classList.add('clicked');
          setTimeout(() => {
            button.classList.remove('clicked');
          }, 300);
          
          // Highlight du terminal pendant 0.5s
          terminal.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.3)';
          setTimeout(() => {
            terminal.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.5)';
          }, 500);
        });
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
      
      // Configurer les effets pour les boutons du terminal
      setupTerminalButtons();
      
      // Animation au chargement de la page
      document.body.classList.add('loaded');
    };
    
    // Lancer l'initialisation
    init();
  });