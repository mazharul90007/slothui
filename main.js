// Faq section functions start
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question-container');
  question.addEventListener('click', () => {
    // Toggle this item
    item.classList.toggle('active');

    // Collapse others
    faqItems.forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
      }
    });
  });
});

// Faq section functions ends
