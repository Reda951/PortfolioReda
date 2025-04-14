/**
 * Portfolio - Script principal
 * Par Reda Aboudi
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Variables globales =====
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const welcomeMessage = document.getElementById('welcome-message');
    const backToTop = document.querySelector('.back-to-top');
    const sections = document.querySelectorAll('section');
    const skillItems = document.querySelectorAll('.skill-item');
    
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
    
    // ===== Animation de frappe pour le message d'accueil =====
    const typeWriterEffect = () => {
      if (welcomeMessage) {
        const originalText = welcomeMessage.textContent;
        welcomeMessage.textContent = '';
        let charIndex = 0;
        
        const type = () => {
          if (charIndex < originalText.length) {
            welcomeMessage.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
          } else {
            // Ajouter un effet visuel une fois l'animation terminée
            welcomeMessage.classList.add('completed');
            
            // Recommencer l'animation après un délai
            setTimeout(() => {
              welcomeMessage.textContent = '';
              charIndex = 0;
              welcomeMessage.classList.remove('completed');
              setTimeout(type, 500);
            }, 5000);
          }
        };
        
        // Démarrer l'animation
        setTimeout(type, 1000);
      }
    };
    
    // ===== Observer les éléments qui entrent dans la vue =====
    const createIntersectionObserver = () => {
      const options = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% de l'élément doit être visible
      };
      
      const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Changer 'visible' en 'active'
            observer.unobserve(entry.target);
          }
        });
      };
      
      const observer = new IntersectionObserver(handleIntersect, options);
      
      // Observer les éléments animés
      document.querySelectorAll('.reveal-element, .skill-item, .tool-item').forEach(item => {
        observer.observe(item);
      });
      
      return observer;
    };
    
    // ===== Animer progressivement les compétences =====
    const animateSkills = () => {
      skillItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, 150 * index); // Décalage progressif
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
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
      
      // Vérifier la section active pour la navigation
      updateActiveNavigation();
      
      // Animer les compétences lorsqu'on atteint la section
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          animateSkills();
        }
      }
    };
    
    // ===== Mettre à jour la navigation active =====
    const updateActiveNavigation = () => {
      let activeSection = '';
      
      // Trouver la section visible actuelle
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          activeSection = sectionId;
        }
      });
      
      // Mettre à jour les classes actives dans la navigation
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href && href.includes(activeSection)) {
          link.classList.add('active');
        }
      });
    };
    
    // ===== Initialisation =====
    const init = () => {
      // Démarrer l'effet de frappe
      typeWriterEffect();
      
      // Créer l'observer d'intersection
      const observer = createIntersectionObserver();
      
      // Gérer le scroll
      window.addEventListener('scroll', handleScroll);
      
      // Vérifier l'état initial
      handleScroll();
      
      // Animation de chargement de la page
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
    };
    
    // Lancer l'initialisation
    init();
  });