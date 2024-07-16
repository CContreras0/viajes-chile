$(document).ready(function () {
    console.log("ready!");
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // Se aplica posicionamiento top por defecto a todos los tooltips de la página
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'top'
    });
});

$('#enviarformulario').click(function () {
    alert("El formulario fue enviado correctamente...");
});