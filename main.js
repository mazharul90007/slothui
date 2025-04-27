//Testimonial function start
document.querySelector('.load-more-btn').addEventListener('click', function () {
  const grid = document.querySelector('.testimonial-grid');
  const button = this;

  // Toggle active state
  grid.classList.toggle('active');

  // Change button text
  if (grid.classList.contains('active')) {
    button.textContent = 'Show Less';
  } else {
    button.textContent = 'Load More +';
  }
});
//Testimonial function ends

// Faq section functions start
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question-container');
  question.addEventListener('click', () => {
    item.classList.toggle('active');

    faqItems.forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
      }
    });
  });
});

// Faq section functions ends
