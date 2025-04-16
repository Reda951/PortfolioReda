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
  const filterNote = document.getElementById('filter-note');
  const filterDate = document.getElementById('filter-date');
  const filterSource = document.getElementById('filter-source');
  const resetFiltersBtn = document.getElementById('reset-filters');
  const veilleCards = document.querySelectorAll('.veille-card');
  
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
  
  // ===== Système de filtres =====
  const applyFilters = () => {
    const selectedNote = parseInt(filterNote.value);
    const selectedDate = filterDate.value;
    const selectedSource = filterSource.value;
    
    // Date actuelle pour calculs de dates
    const now = new Date();
    
    veilleCards.forEach(card => {
      // Récupérer les attributs de données
      const cardNote = parseInt(card.dataset.note);
      const cardDate = new Date(card.dataset.date);
      const cardSource = card.dataset.source;
      
      // Vérifier la note
      const noteMatch = selectedNote === 0 || cardNote >= selectedNote;
      
      // Vérifier la date
let dateMatch = true;
if (selectedDate !== 'all') {
  // Récupérer la date au format JJ/MM/AAAA
  const dateStr = card.dataset.date;
  
  // Convertir au format AAAA-MM-JJ pour JavaScript
  let cardDate;
  if (dateStr) {
    // Le format peut contenir des / ou des -
    const parts = dateStr.includes('/') ? dateStr.split('/') : dateStr.split('-');
    
    if (parts.length === 3) {
      // Réorganiser en AAAA-MM-JJ pour JavaScript
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Les mois commencent à 0 en JS
      const year = parseInt(parts[2], 10);
      
      cardDate = new Date(year, month, day);
      
      // Vérifier si la date est valide
      if (!isNaN(cardDate.getTime())) {
        // Calculer la différence en jours
        const dateDiff = Math.floor((now - cardDate) / (1000 * 60 * 60 * 24));
        
        switch (selectedDate) {
          case 'week':
            dateMatch = dateDiff <= 7;
            break;
          case 'month':
            dateMatch = dateDiff <= 30;
            break;
          case 'quarter':
            dateMatch = dateDiff <= 90;
            break;
          case 'year':
            dateMatch = dateDiff <= 365;
            break;
        }
      } else {
        console.error("Date invalide après conversion:", dateStr);
        dateMatch = false;
      }
    } else {
      console.error("Format de date incorrect:", dateStr);
      dateMatch = false;
    }
  } else {
    console.error("Aucune date trouvée");
    dateMatch = false;
  }
}
      
      // Vérifier la source
      const sourceMatch = selectedSource === 'all' || cardSource === selectedSource;
      
      // Afficher ou masquer la carte
      if (noteMatch && dateMatch && sourceMatch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };
  
  // Écouter les changements sur les filtres
  if (filterNote) {
    filterNote.addEventListener('change', applyFilters);
  }
  
  if (filterDate) {
    filterDate.addEventListener('change', applyFilters);
  }
  
  if (filterSource) {
    filterSource.addEventListener('change', applyFilters);
  }
  
  // Réinitialiser les filtres
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      filterNote.value = '0';
      filterDate.value = 'all';
      filterSource.value = 'all';
      
      veilleCards.forEach(card => {
        card.style.display = 'flex';
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