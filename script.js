// Código JavaScript de Bootstrap para realizar validaciones a los formularios (clase need validation)
//utilizada en el Formulario de Contacto.
(function () {
    'use strict'

    
    var forms = document.querySelectorAll('.needs-validation')

    
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()