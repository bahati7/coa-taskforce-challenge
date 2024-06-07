const imageOverlays = document.querySelectorAll('.image-overlay');

    imageOverlays.forEach(overlay => {
      const imageText = overlay.querySelector('.image-text');
      const textMore=document.querySelector('.div-text-more');
      const initialY = imageText.offsetTop; // Store initial top position

      overlay.addEventListener('mouseover', () => {
        imageText.style.transform = `translateY(${ - 8}px)`; // Move up 10px
        textMore.style.display='block';
      });

      overlay.addEventListener('mouseout', () => {
        imageText.style.transform = 'translateY(0px)'; // Reset to initial position
        textMore.style.display='none';
   
      });
    });