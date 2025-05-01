const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translate(-50%)"
    mascara.style.visibility = "visible"
}

function escomderform(){
    form.style.left = "-300%"
    form.style.transform = "translate(0)"
    mascara.style.visibility = "hidden"

}
