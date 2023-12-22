function updateOpacity() {
    // Find the currently active slide
    const activeSlide = document.querySelector('.slides-container .slide.active');
  
    // Get the next slide to be displayed
    let nextSlide = activeSlide.nextElementSibling;
  
    if (!nextSlide) {
      // If there is no next sibling, go back to the first slide
      nextSlide = document.querySelector('.slides-container .slide:first-child');
    }
  
    // Update opacity
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
  }
  
  // Update opacity every 5 seconds
  setInterval(updateOpacity, 5000);


