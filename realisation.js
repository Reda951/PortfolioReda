document.addEventListener('DOMContentLoaded', () => {
    // Navigation mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
    
    // Bouton retour en haut
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    if (backToTop) {
      backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // Animations pour les projets
    setTimeout(() => {
      document.querySelectorAll('.project-terminal').forEach((project, index) => {
        setTimeout(() => {
          project.style.opacity = '0';
          project.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            project.style.transition = 'all 0.5s ease';
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          }, 100 * index);
        }, 0);
      });
    }, 500);
  });
  // ===== Zoom image =====
document.addEventListener('click', (e) => {
    // Ouvrir le zoom
    if (e.target.classList.contains('zoom-img')) {
      e.preventDefault();
      e.stopPropagation(); // Important pour éviter les conflits d'événements
      
      const zoomModal = document.getElementById('zoom-modal');
      const zoomedImg = document.getElementById('zoomed-img');
      
      zoomedImg.src = e.target.src;
      zoomModal.style.display = 'flex';
      zoomModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
  
  // Fermer le zoom en cliquant sur le fond
  document.addEventListener('click', (e) => {
    const zoomModal = document.getElementById('zoom-modal');
    if (e.target === zoomModal) {
      zoomModal.style.display = 'none';
      zoomModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Fermer le zoom avec le bouton de fermeture
  const zoomClose = document.querySelector('.zoom-close');
  if (zoomClose) {
    zoomClose.addEventListener('click', () => {
      const zoomModal = document.getElementById('zoom-modal');
      zoomModal.style.display = 'none';
      zoomModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Fermer le zoom avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const zoomModal = document.getElementById('zoom-modal');
      if (zoomModal.style.display === 'flex') {
        zoomModal.style.display = 'none';
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });