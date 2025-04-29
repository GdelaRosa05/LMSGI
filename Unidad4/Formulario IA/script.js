function generarFrase() {
    const motor = document.querySelector('input[name="motor"]:checked').value
    const transmision = document.querySelector('input[name="transmision"]:checked').value
    const traccion = document.querySelector('input[name="traccion"]:checked').value
    const carroceria = document.querySelector('input[name="carroceria"]:checked').value
    const puertas = document.getElementById('puertas').value

    const boxMensaje = document.createElement("div")
    boxMensaje.classList.add("box-mensaje")
    
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    
    const prompt = document.createElement("p")
    prompt.textContent = `Quiero los 3 mejores coches que sean de motor ${motor} con transmisión ${transmision} que tengan tracción ${traccion}, tipo de carrocería ${carroceria} y con ${puertas} puertas.`

    const botonCerrar = document.createElement("button")
    botonCerrar.textContent = "Cerrar"
    botonCerrar.classList.add("cerrar-btn")
    botonCerrar.onclick = () => {
      overlay.style.opacity = 0
      boxMensaje.style.opacity = 0

      setTimeout(() => {
        boxMensaje.remove()
        overlay.remove()
      }, 300)
    }

    boxMensaje.appendChild(prompt)
    boxMensaje.appendChild(botonCerrar)

    document.body.appendChild(overlay)
    document.body.appendChild(boxMensaje)

    setTimeout(() => {
      overlay.style.opacity = 1
      boxMensaje.style.opacity = 1
    }, 10)
}