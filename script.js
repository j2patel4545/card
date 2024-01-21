const slides = document.querySelector('.slides');
  const buttons = document.querySelectorAll('.button');

  let currentSlide = 0;

  function changeSlide(index) {
    currentSlide = index;
    updateSlider();
    clearInterval(interval); // Clear existing interval
    startInterval(); // Restart the interval after manual button click
  }

  function updateSlider() {
    const translateValue = -currentSlide * 100 + '%';
    slides.style.transform = `translateX(${translateValue})`;

    // Update button states
    buttons.forEach((button, index) => {
      button.classList.toggle('active', index === currentSlide);
    });
  }

  function startInterval() {
    interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % 5; // Assuming 5 slides
      updateSlider();
    }, 2500); // Change slide every 2000 milliseconds (2 seconds)
  }

  startInterval();