// Contact & Recolección form handling
document.addEventListener("DOMContentLoaded", () => {
  const forms = [document.getElementById("contactForm"), document.getElementById("recoleccionForm")];
  forms.forEach(form => {
    if(form){
      form.addEventListener("submit", e => {
        e.preventDefault();
        const responseDiv = document.getElementById("formResponse");
        if(responseDiv){
          responseDiv.style.display = "block";
          responseDiv.style.color = "green";
          responseDiv.innerText = "✅ Gracias, tu mensaje ha sido enviado.";
        }
        form.reset();
      });
    }
  });
});
