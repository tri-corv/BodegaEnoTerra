// Validación de formulario
const form = document.querySelector(".formulario-registro");
const errorText = document.getElementById("error-text");

form.addEventListener("submit", function (e) {
  const [password1, password2] = form.querySelectorAll("input[type='password']");
  if (password1.value !== password2.value) {
    e.preventDefault();
    errorText.textContent = "Las contraseñas no coinciden.";
    errorText.style.display = "block";
  } else {
    errorText.textContent = "";
    errorText.style.display = "none";
  }
});

// Navegación con íconos y menú
document.getElementById('link-home')?.addEventListener('click', () => window.location.href = '../Home/home.html');
document.getElementById('link-vinos')?.addEventListener('click', () => window.location.href = '../Vinos/vinos.html');
document.getElementById('link-enoturismo')?.addEventListener('click', () => window.location.href = '../Enoturismo/enoturismo.html');
document.getElementById('link-ubicacion')?.addEventListener('click', () => window.location.href = '../Ubicacion/ubicacion.html');
document.getElementById('link-contacto')?.addEventListener('click', () => window.location.href = '../Contacto/contacto.html');

document.getElementById('icon-usuario')?.addEventListener('click', () => window.location.href = '../InicioSesion/iniciosesion.html');
document.getElementById('icon-buscar')?.addEventListener('click', () => window.location.href = '../Busqueda/busqueda.html');
document.getElementById('icon-carrito')?.addEventListener('click', () => window.location.href = '../Detalle de producto/compra.html');
