window.onload = () => {
  // Hide the splash screen and show the main content after 3 seconds
  const splash = document.getElementById('splash');
  const mainContent = document.querySelector('.main-content');

  setTimeout(() => {
    splash.style.display = 'none';
    mainContent.style.display = 'block';
  }, 1000); // 3000ms = 3 seconds
};
document.querySelectorAll('.background-images').forEach((box) => {
  const img = box.querySelector('img');

  box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    img.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
  });

  box.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});
