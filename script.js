const cards = document.querySelectorAll("[data-tilt]");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = (y / rect.height - 0.5) * -55;
    const rotY = (x / rect.width - 0.5) * 55;

    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.12)`;

    const shadowX = (x / rect.width - 0.5) * -50;
    const shadowY = (y / rect.height - 0.5) * 50;

    card.style.boxShadow = `${-shadowX}px ${shadowY}px 35px rgba(0,255,0,0.8)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.boxShadow = `0 0 25px rgba(0,255,0,0.25)`;
  });
});
