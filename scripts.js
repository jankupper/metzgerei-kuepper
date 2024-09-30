document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const handleScroll = () => {
    fadeInElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const viewHeight = window.innerHeight;

      if (elementPosition < viewHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Trigger the scroll event once to check elements on page load
  handleScroll();
});
