document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000, // Troca de foto a cada 3 segundos
        disableOnInteraction: false, // Permite que o usuário interaja sem parar o autoplay
      },
      pagination: {
        el: '.swiper-pagination', // Elemento que contém as bolinhas
        clickable: true, // Permite clicar nas bolinhas para navegar
      },
    });
  });