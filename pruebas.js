let automovil = {
    marca: "Mazda",
    modelo: "3 Sport",
    origen: "Japón",
}

let instrumento = {
    tipo: "Guitarra",
    cuerdas: "6",
    color: "azul",
    año: "1994",
}

let computadora = {
    marca_pc: "Asus",
    ram: "16Gb",
    so: "Windows",
    tipo: "Gamer",
}

let propiedades = {
    cuartos: "4",
    baños: "2",
    patio: "1",
    garage: "1",
    ubicacion: "calle San Diego 8081"
}

console.log(automovil["modelo"])

const persona = {
    nombre: "Pedro",
    apellido: "Perez",
    profesion: "Frontend Developer",
    hobby: "Trekking",
    anoDeNacimiento: 1988,
}

console.log(persona.anoDeNacimiento)
console.log(persona.apellido)

const articulo = {
    id: 31,
    titulo: "Autos nuevos en Chile",
    subtitulo: "El mercado de autos se normaliza",
    descripcion: `No es novedad que los precios
    de los autos usados se han disparado debido
    a la falta en stock de autos nuevos, sin embargo
    puede que esto esté llegando a su fin...`
}

const articulosSection = document.querySelector(".articulos")
articulosSection.innerHTML = `<article class="articulo">
<h4>${articulo.titulo}</h4>
<h6>${articulo.subtitulo}</h6>
<p>${articulo.descripcion}</p>
<a href="/articulo/${articulo.id}"><button>Ver más</button></a>
</article>`


const producto = {
    id: 43,
    titulo: "Cafetera magnética",
    precio: 23990,
    color: "rojo",
    src: "https://cdn.shopify.com/s/files/1/0104/4391/5319/products/12319_AMB_WEB0_700x.jpg?v=1661374483", // ingresa aquí la URL de la imagen,
    descripción: "Calienta tu café matutino con la nueva tecnología magnética"
};

const productsection = document.querySelector(".producto")
productsection.innerHTML = `
<h2><u>${producto.titulo} color ${producto.color}</u></h2>
<h3><b>${producto.precio}</b></h3>
<img class="imagen" src = "${producto.src}">
<p>${producto.descripción}</p>
`

const ventasDeLaSemana = [
    { dia: "Lunes", total: 34000 },
    { dia: "Martes", total: 40000 },
    { dia: "Miércoles", total: 41000 },
    { dia: "Jueves", total: 50000 },
    { dia: "Viernes", total: 62000 },
    { dia: "Sábado", total: 85000 },
    { dia: "Domingo", total: 20000 },
]

const ul = document.querySelector("ul")
for (let venta of ventasDeLaSemana) {
    ul.innerHTML += `<li>${venta.dia}: ${venta.total} </li>`
}

const departamentos = [
    { departamento: 323, propietario: "Natalia Jiménez", telft: "+56 9 5312 4578" },
    { departamento: 123, propietario: "Luis Fonsi", telft: "+56 9 4612 7894" },
    { departamento: 431, propietario: "David Bisbal", telft: "+56 9 8978 4465" },
    { departamento: 412, propietario: "Noel Schajris", telft: "+56 9 9874 6432" },
    { departamento: 203, propietario: "Ricardo Montaner", telft: "+56 9 8764 6813" },
]
let tbody = document.querySelector("tbody")
for (let dpto of departamentos) {
    const template = `
    <tr>
    <td>${dpto.departamento}</td>
    <td>${dpto.propietario}</td>
    <td>${dpto.telft}</td>
    </tr>
    `;
    tbody.innerHTML += template;
}

const iconos = [
    {icono: "🚗", descripcion: "Auto"},
    {icono: "🤖", descripcion: "Robot"},
    {icono: "👻", descripcion: "Fantasma"},
    {icono: "👽", descripcion: "Alien"},
    {icono: "🦷", descripcion: "Diente"},
    {icono: "🕹", descripcion: "Joystick"}
    ];

    const icon = document.querySelector(".iconos")

    for (const icono of iconos) {
        icon.innerHTML += `
        <div>${icono.icono} ${icono.descripcion}</div>`        
    }
