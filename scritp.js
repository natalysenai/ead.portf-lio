document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    menuToggle.addEventListener("click", () => nav.classList.toggle("show"));
  
    document.getElementById("year").textContent = new Date().getFullYear();
  
    const filterButtons = document.querySelectorAll(".project-filters button");
    const projects = document.querySelectorAll(".project-card");
  
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const f = btn.dataset.filter;
  
        projects.forEach((p) => {
          if (f === "all" || p.dataset.type === f) {
            p.style.display = "";
          } else {
            p.style.display = "none";
          }
        });
      });
    });
  
    const form = document.getElementById("contact-form");
    const formMsg = document.getElementById("form-msg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        formMsg.textContent = "Preencha todos os campos.";
        return;
      }
  
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        formMsg.textContent = "Insira um e-mail válido.";
        return;
      }
  
      formMsg.textContent = "Mensagem enviada!";
      form.reset();
  
      setTimeout(() => {
        formMsg.textContent = "";
      }, 5000);
    });
  });
  