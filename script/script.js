const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform =
      `rotateX(${(y - rect.height/2)/10}deg) 
       rotateY(${-(x - rect.width/2)/10}deg) 
       scale(1.1)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) rotateX(0) rotateY(0)';
  });
});