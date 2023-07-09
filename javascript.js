let drugstore = [
    { id: 1, nombre: "Promo 1", categoria: "Fernet", unidades: 15, precio: 4250, rutaImagen: "promo1.jpeg" },
    { id: 2, nombre: "Promo 2", categoria: "Campari", unidades: 20, precio: 2950, rutaImagen: "promo2.jpeg" },
    { id: 3, nombre: "Promo 3", categoria: "Vodka", unidades: 10, precio: 3100, rutaImagen: "promo3.jpeg" },
    { id: 4, nombre: "Promo 4", categoria: "Cervezas", unidades: 12, precio: 1650, rutaImagen: "promo4.jpeg" },
    { id: 5, nombre: "Promo 5", categoria: "Cervezas", unidades: 5, precio: 1950, rutaImagen: "promo5.jpeg" },
    { id: 6, nombre: "Promo 6", categoria: "Vinos", unidades: 8, precio: 1470, rutaImagen: "promo6.jpeg" }
]

let elementos = document.getElementById("productos")


let carritoJSON = JSON.parse(localStorage.getItem("carrito"))
let carrito = carritoJSON ? carritoJSON : []

let contenerdorBotones = document.getElementById("contenedorBotones")
let botonCompraFinalizada = document.getElementById("finalizarCompra")
botonCompraFinalizada.addEventListener("click", () => finalizarCompra(carrito))


filtroCreados(drugstore)
primeraFuncion(drugstore, elementos, carrito)
actualizandoCarrito(carrito)


// <-----FINALIZAR COMPRA----->
function finalizarCompra(carrito) {
    let carroEnLaWeb =  document.getElementById("carrito")
    carroEnLaWeb.innerHTML = ""
    localStorage.removeItem("carrito")
    carrito = []
    actualizandoCarrito ([])
}

// <-----CREAR ELEMENTOS----->
function primeraFuncion(drugstore) {
    elementos.innerHTML = ""
    drugstore.forEach(producto => {
        let tarjeta = document.createElement("div")
        producto.className = "claseProducto"
        tarjeta.innerHTML = `
        <h4 class="tituloProducto">${producto.nombre}</h4>
        <img class="imagen" src="img/${producto.rutaImagen}">
        <h4 class="precioProducto">$${producto.precio}</h4>
        <h4 class="unidadesProducto">Unidades disponibles ${producto.unidades}</h4>
        <button id=${producto.id}>Agregar al carrito</button>
        `
        elementos.appendChild(tarjeta)
        let botonAgregar = document.getElementById(producto.id)
        botonAgregar.addEventListener("click", () => funcionAgregar(drugstore, producto.id))
    })
}

function funcionAgregar (drugstore, id, carrito) {
    console.log(id)
    let buscandoBebidas = drugstore.find(producto => producto.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(producto =>producto.id === id)

    if (posicionProductoEnCarrito !== -1) {
        carrito[posicionProductoEnCarrito].unidades++
        carrito[posicionProductoEnCarrito].subtotal = posicionProductoEnCarrito.unidades * carrito[posicionProductoEnCarrito].subtotal
    } else {
        carrito.push({
            id: buscandoBebidas.id,
            nombre: buscandoBebidas.nombre,
            precio: buscandoBebidas.precio,
            unidades: 1,
            subtotal: buscandoBebidas.precio
            })
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizandoCarrito(carrito)
}

    function actualizandoCarrito(carritoJSON) {
        let carroEnLaWeb = document.getElementById("carrito")
        carroEnLaWeb.innerHTML = `
        <div id=encabezadoCarrito>
        <p>Nombre</p>
        <p>Precio Unitario</p>
        <p>Unidades</p>
        <p>Subtotal</p>
        </div>
        `

        carritoJSON.forEach(({ nombre, precioUnitario, unidades, subtotal } ) => {
            let contenidoDelCarrito = document.createElement("div")
            contenidoDelCarrito.classList.add("contenidoDelCarrito")
            contenidoDelCarrito.innerHTML = `
            <p>${nombre}</p>
            <p>${precioUnitario}</p>
            <p>${unidades}</p>
            <p>${subtotal}</p>
            `
            carroEnLaWeb.appendChild(contenidoDelCarrito)
        })
    }

    let contenedorCarritoDeCompras = document.getElementById("contenedorCarritoDeCompras")
    contenedorCarritoDeCompras.addEventListener("click", mostrarOcultar)

    function mostrarOcultar() {
        let contenedorPadre = document.getElementById("productos")
        let carrito = document.getElementById("contenedorCarritoVacio")
        contenedorPadre.classList.toggle("oculto")
        carrito.classList.toggle("oculto")
    }




// <------FILTRAR PRODUCTOS------> (FALTA AGREGAR EL TOLOWERCASE)
let search = document.getElementById("search")
search.addEventListener("input", filtrandoProductos)

function filtrandoProductos() {
    let arrayFiltrado = drugstore.filter(producto => producto.nombre.includes(search.value) || producto.categoria.includes(search.value))
    primeraFuncion(arrayFiltrado)
}

// <-------FILTRO BOTONES------->
function filtrandoPorCateg(e) {
    if (e.target.id === "Todos") {
        primeraFuncion(drugstore)
    } else {
        let productosFiltrados = drugstore.filter(producto => producto.categoria === e.target.id)
        primeraFuncion(productosFiltrados)
    }
}

function filtroCreados(cadaElemento) {
    let filtro = ["Todos"]
    cadaElemento.forEach(producto => {
        if (!filtro.includes(producto.categoria)) {
            filtro.push(producto.categoria)
        }
    })

    let conjuntoFiltros = document.getElementById("contenerdorBotones")
    filtro.forEach(filtros => {
        let botton = document.createElement("button")
        botton.id = filtros
        botton.innerText = filtros
        conjuntoFiltros.appendChild(botton)

        let buttonDos = document.getElementById(filtros)
        buttonDos.addEventListener("click", filtrandoPorCateg)
    })
}
















