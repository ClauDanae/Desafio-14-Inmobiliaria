
const propiedadTemplate = (propiedad) => {
    return `<div class="propiedad">
    <div class="img"
        style="background-image: url('${propiedad.src}')">
    </div>
    <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
    </div>`
}

const filtrar = () => {
    const prop = document.querySelector(".propiedades")
    prop.innerHTML = ""
    let suma_propiedades = 0
    const cuartos = document.querySelector("#cantidad_rooms").value
    const desde = document.querySelector("#metros_desde").value
    const hasta = document.querySelector("#metros_hasta").value

    if (cuartos == "") {
        alert("Falta la cantidad de cuartos")
    }
    else if (desde == "") {
        alert("Faltan metros cuadrados 'desde' ")
    }
    else if (hasta == "") {
        alert("Faltan metros cuadrados 'hasta' ")
    }
    else if (cuartos >= 7) {
        alert("No existen propiedades con más de 6 cuartos ")
    }
    else if (hasta >= 501) {
        alert("No existen propiedades de más de 500 metros cuadrados")
    }
    for (const propiedad of propiedadesJSON) {
        if (propiedad.rooms == cuartos && propiedad.m >= desde && propiedad.m <= hasta) {
            prop.innerHTML += propiedadTemplate(propiedad)
            suma_propiedades += 1
        }
    }
    const ttprop = document.querySelector("#total_propiedades")
    ttprop.innerHTML = suma_propiedades
}

const borrarDatos = () => {
    document.querySelector("#cantidad_rooms").value = ""
    document.querySelector("#metros_desde").value = ""
    document.querySelector("#metros_hasta").value = ""
    const prop = document.querySelector(".propiedades")
    prop.innerHTML = ""
    let suma_propiedades = 0
    for (const propiedad of propiedadesJSON) {
        prop.innerHTML += propiedadTemplate(propiedad)
        suma_propiedades += 1
    }
    const ttprop = document.querySelector("#total_propiedades")
    ttprop.innerHTML = suma_propiedades
}

