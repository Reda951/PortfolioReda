/**
 * Script pour la page Entreprise
 * Portfolio de Reda Aboudi
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Variables globales =====
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const backToTop = document.querySelector('.back-to-top');
    const sections = document.querySelectorAll('section');
    
    // ===== Rendre les éléments visibles immédiatement =====
    // Correction du problème d'affichage
    document.querySelectorAll('.reveal-element').forEach(el => {
      el.classList.add('active');
    });
    
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
          top: element.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    };
    
    // Écouteur pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ne pas interférer avec les liens externes ou les liens de page
        if (href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          smoothScroll(href);
        }
      });
    });
    
    // ===== Animation progressive des cartes =====
    const animateCards = () => {
      // Animation de l'organigramme
      const orgCards = document.querySelectorAll('.org-card');
      orgCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          
          // Animation d'entrée avec un délai progressif
          setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100 * index);
        }, 0);
      });
      
      // Animation des rôles
      const roleItems = document.querySelectorAll('.role-item');
      roleItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '0';
          item.style.transform = 'translateX(-20px)';
          
          setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }, 150 * index);
        }, 0);
      });
    };
    
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
            
            // Si c'est l'organigramme, lancer l'animation des cartes
            if (target.id === 'organigramme') {
              animateCards();
            }
            
            // Ne plus observer cet élément
            observer.unobserve(target);
          }
        });
      };
      
      // Créer l'observateur
      const observer = new IntersectionObserver(handleIntersect, options);
      
      // Observer les sections
      sections.forEach(section => {
        observer.observe(section);
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
      
      // Mettre à jour la navigation active
      updateActiveNavigation();
    };
    
    // ===== Mettre à jour la navigation active =====
    const updateActiveNavigation = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Trouver la section active
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Mettre à jour la classe active dans la navigation
          document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
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
      setTimeout(animateCards, 500);
    };
    
    // Lancer l'initialisation
    init();
  });