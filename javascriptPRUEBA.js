let base = [
    { id: 1, nombre: "Promo 1", categoria: "Fernet", unidades: 15, precio: 4250, rutaImagen: "promo1.jpeg" },
    { id: 2, nombre: "Promo 2", categoria: "Campari", unidades: 20, precio: 2950, rutaImagen: "Promo2.jpeg" },
    { id: 3, nombre: "Promo 3", categoria: "Vodka", unidades: 10, precio: 3100, rutaImagen: "Promo3.jpeg" },
    { id: 4, nombre: "Promo 4", categoria: "Cervezas", unidades: 12, precio: 1650, rutaImagen: "Promo4.jpeg" },
    { id: 5, nombre: "Promo 5", categoria: "Cervezas", unidades: 5, precio: 1950, rutaImagen: "Promo5.jpeg" },
    { id: 6, nombre: "Promo 6", categoria: "Vinos", unidades: 8, precio: 1470, rutaImagen: "Promo6.jpeg" }
]

let carrito = []

const productos = document.getElementById("productos")
const verCarrito = document.getElementById("contenedorCarritoDeCompras")
const contenidoModal = document.getElementById("contenedorCarritoDeCompras")

// <-----CREAR ELEMENTOS----->
base.forEach((producto) => {
    let contenido = document.createElement("div")
    contenido.className = "productos"
    contenido.innerHTML = `
    <img class="imagen" src="${producto.rutaImagen}">
    <h2 class="tituloProducto">${producto.nombre}</h2>
    <p class="precioProducto">$${producto.precio}</p>
    `
    productos.append(contenido)

    //BOTON AGREGAR PRODUCTO
    let agregarAlCarrito = document.createElement("button")
    agregarAlCarrito.className = "botonCarrito"
    agregarAlCarrito.innerText = "Agregar al carrito"

    contenido.append(agregarAlCarrito)

    //EVENTO AGREGAR PRODUCTO
    agregarAlCarrito.addEventListener("click", () =>{
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio
        })
        console.log(carrito)
    })

    //MODAL CARRITO
    verCarrito.addEventListener("click", () => {
        const modalTitulo = document.createElement("div")
        modalTitulo.className = "modal-titulo"
        modalTitulo.innerHTML = `
        <h2 class="titulo-modal1">Carro de Compras</h2>
        `
        contenidoModal.append(modalTitulo)

        const botonModal = document.createElement("h2")
        botonModal.innerText = "❌"
        botonModal.className = "botonModal"

        botonTitulo.append("botonModal")

        //PUSH
        carrito.forEach((producto) =>{
            let contenidoCarrito = document.createElement("div")
            contenidoCarrito.className = "contenidoDelCarrito"
            contenidoCarrito.innerHTML = `
            <h2${producto.nombre}</h2>
            <p$${producto.precio}</p>
            `
            contenidoModal.append(contenidoCarrito)
        })
        
    })
})

