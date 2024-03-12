let menu_responsive = document.querySelector(".checkbox");


const form = document.getElementById("form");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".nav_links");
    navBar.classList.toggle("active");

};


function validarFormulario() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Expresión regular para validar el formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación del nombre (puede ser más compleja dependiendo de tus requisitos)
    if (name.trim().length <= 5) {
        alert('Por favor ingrese un nombre con más de 5 letras.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Por favor ingrese un email válido.');
        return false;
    }

    return true;
}
form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
    
    formulario.submit();
    } else {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});