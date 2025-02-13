document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // Função para abrir/fechar o menu hambúrguer
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  
    // Função para destacar o link ativo conforme o usuário rola a página
    window.addEventListener("scroll", () => {
      let current = "";
  
      // Verifica em qual seção o usuário está
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
  
      // Adiciona a classe "active" ao link correspondente à seção atual
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  
    // Fecha o menu ao clicar em um link (opcional)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
      });
    });
  });