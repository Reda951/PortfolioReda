/**
 * Script pour la page Mentions Légales
 * Portfolio de Reda Aboudi
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Variables globales =====
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const backToTop = document.querySelector('.back-to-top');
    const legalSections = document.querySelectorAll('.legal-section');
    const legalContainer = document.querySelector('.legal-container');
    
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
    
    // ===== Effets visuels pour les sections légales =====
    const setupLegalSections = () => {
      // S'assurer que le container légal est visible
      if(legalContainer) {
        legalContainer.style.opacity = '1';
        legalContainer.style.visibility = 'visible';
        legalContainer.style.display = 'block';
      }
      
      legalSections.forEach((section, index) => {
        // Réinitialiser les styles en cas de problème précédent
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'all 0.5s ease';
        section.style.visibility = 'visible';
        section.style.display = 'block';
        
        // Effet progressif, mais en s'assurant que tout reste visible
        setTimeout(() => {
          // On ne cache pas complètement les sections au début
          section.style.opacity = '0.2'; 
          section.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
          }, 150 * index);
        }, 100); // Délai réduit
        
        // Effet de survol sur les icônes
        const icon = section.querySelector('h2 i');
        if (icon) {
          section.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.textShadow = '0 0 10px var(--primary-color)';
          });
          
          section.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
            icon.style.textShadow = 'none';
          });
        }
      });
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
    
    // ===== Initialisation =====
    const init = () => {
      // Rendre immédiatement visibles les éléments avec la classe reveal-element
      document.querySelectorAll('.reveal-element').forEach(el => {
        el.classList.add('active');
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.display = 'block';
      });
      
      // Configurer l'observateur d'intersection
      const observer = setupIntersectionObserver();
      
      // Configurer les effets pour les sections légales
      setupLegalSections();
      
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
      
      // Animation au chargement de la page
      document.body.classList.add('loaded');
    };
    
    // Lancer l'initialisation
    init();
});