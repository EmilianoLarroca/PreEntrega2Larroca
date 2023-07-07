let drugstore = [
    { id: 1, nombre: "Promo 1", categoria: "Fernet", unidades: 15, precio: 4250, rutaImagen: "promo1.jpeg" },
    { id: 2, nombre: "Promo 2", categoria: "Campari", unidades: 20, precio: 2950, rutaImagen: "promo2.jpeg" },
    { id: 3, nombre: "Promo 3", categoria: "Vodka", unidades: 10, precio: 3100, rutaImagen: "promo3.jpeg" },
    { id: 4, nombre: "Promo 4", categoria: "Cervezas", unidades: 12, precio: 1650, rutaImagen: "promo4.jpeg" },
    { id: 5, nombre: "Promo 5", categoria: "Cervezas", unidades: 5, precio: 1950, rutaImagen: "promo5.jpeg" },
    { id: 6, nombre: "Promo 6", categoria: "Vinos", unidades: 8, precio: 1470, rutaImagen: "promo6.jpeg" }
]

let elementos = document.getElementById("productos")


filtroCreados(drugstore)
primeraFuncion(drugstore, elementos)

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
        `
        elementos.appendChild(tarjeta)
    })
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
















//---------------------------------------------------------------------------
//2DA PRE-ENTREGA

// function comprarProductos() {
//     let numero = prompt("¿Que desea comprar? Elija un número como opción:\n1-Manzanas\n2-Bananas\n3-Kiwi\n4-Zanahoria\n5-Lechuga\n6-Tomate\n7-Finalizar Compra")
//     let sumaTotal = 0
//     while (numero != "0") {
//         switch (numero) {
//             case "1":
//                 alert("Has elegido Manzanas")
//                 sumaTotal = sumaTotal + 500
//                 alert("Tu saldo actual es de " + "$" + sumaTotal)
//                 break;
//             case "2":
//                 alert("Has elegido Bananas")
//                 sumaTotal = sumaTotal + 650
//                 alert("Tu saldo actual es de " + "$" + sumaTotal)
//                 break;
//             case "3":
//                 alert("Has elegido Kiwi")
//                 sumaTotal = sumaTotal + 800
//                 alert("Tu saldo actual es de " + "$" + sumaTotal)
//                 break;
//             case "4":
//                 alert("Has elegido Zanahoria")
//                 sumaTotal = sumaTotal + 1200
//                 alert("Tu saldo actual es de " + "$" + sumaTotal)
//                 break;
//             case "5":
//                 alert("Has elegido Lechuga")
//                 sumaTotal = sumaTotal + 1000
//                 alert("Tu saldo actual es de " + "$" + sumaTotal)
//                 break;
//             case "6":
//                 alert("Has elegido Tomate")
//                 sumaTotal = sumaTotal + 750
//                 alert("Tu saldo actual es de " + "$" + sumaTotal)
//                 break;
//             case "7":
//                 alert("¡Muchas gracias por elegirnos!\nSu compra total fue de " + "$" + sumaTotal)
//                 return;
//             default:
//                 alert("El número ingresado es incorrecto, vuelva a intentarlo")
//         }
//         numero = prompt("¿Que desea comprar? Elija un número como opción:\n1-Manzanas\n2-Bananas\n3-Kiwi\n4-Zanahoria\n5-Lechuga\n6-Tomate\n7-Finalizar Compra")
//     }
// }

// //---------------------------------------------------------------------------

// // CONSULTAR STOCK (DISPONIBILIDAD) (FUNCIONA) (FIND)
// function stock() {
//     while (true) {
//         let opcionDeLista = prompt("1-Consultar stock\n2-Volver al menu principal")

//         if (opcionDeLista == "1") {
//             let nombre = prompt("Ingrese el nombre del producto que desea saber su disponibilidad:\n-Manzana\n-Banana\n-Kiwi\n-Zanahoria\n-Lechuga\n-Tomate")
//             let unidadesDisponibles = verduleria.find(verduleria => verduleria.nombre === nombre.toLowerCase())
//             alert("Hay disponibles " + unidadesDisponibles.unidades + " " + " unidades")
//         }
//         if (opcionDeLista == "2") {
//             alert("Volviendo al menu principal")
//             break
//         }
//     }
// }

// //-------------------------------------------------------------------------------------------------------

// // MOSTRAR LOS PRECIOS DE LOS PRODUCTOS (FUNCIONA) (FIND)
// function nombrePrecioDos() {
//     let precioProducto = prompt("Ingrese el nombre del producto que desea saber el precio:\n-Manzana\n-Banana\n-Kiwi\n-Zanahoria\n-Lechuga\n-Tomate")
//     const precioPedido = verduleria.find(productos => productos.nombre === precioProducto.toLowerCase())
//     alert("El precio del producto" + " " + precioPedido.nombre + " " + "es de " + " " + "$" + precioPedido.precio)
// }

// //-------------------------------------------------------------------------------------------------------

// // ORDENAR PRODUCTOS ALFABETICAMENTE (FUNCIONA) (SORT)
// function ordenarPorNombre() {
//     verduleria.sort((a, b) => {
//         if (a.nombre < b.nombre) {
//             return -1
//         }
//         if (a.nombre > b.nombre) {
//             return 1
//         }
//         return 0
//     })
//     let precioProductos = ""
//     verduleria.forEach(verduleras => {
//         precioProductos = precioProductos + " " + verduleras.nombre + " $" + verduleras.precio + " " + "\n"
//     })
//     alert("Lista ordenada alfabeticamente:" + "\n" + precioProductos)
// }

// //---------------------------------------------------------------------------

// // FILTRAR POR CATEGORIA (NO FUNCIONA TODAVIA) (FILTER)
// function filtrado() {
//     let nombreDos = prompt("Ingrese el nombre de la categoria que desea buscar:\n-Frutas\n-Verduras")
//     let variasCategorias = verduleria.filter(verduleria => verduleria.categoria === nombreDos.toLowerCase())
//     console.log(variasCategorias)
// }

// //---------------------------------------------------------------------------

// // AGREGAR NUEVO PRODUCTO (PUSH)
// function agregarProducto() {
//     let nombreProducto = prompt("Ingrese el nombre del producto que desea agregar")
//     let categoriaProducto = prompt("Ingrese la categoria en que desea agregar su nuevo producto:\n-Frutas\n-Verduras")
//     let unidadesProducto = Number(prompt("Ingrese las unidades a agregar"))
//     let precioProducto = Number(prompt("Ingrese el precio del producto por kilo"))
//     const nuevoProducto = {
//         id: verduleria.length + 1,
//         nombre: nombreProducto.toLowerCase(),
//         categoria: categoriaProducto.toLowerCase(),
//         unidades: unidadesProducto,
//         precio: precioProducto
//     }
//     verduleria.push(nuevoProducto)
// }

// //---------------------------------------------------------------------------

// // MENU DE OPCIONES
// function listaDeCompras() {
//     alert("Bienvenidos a la Verduleria Online")
//     let opcionDeMenu = prompt("¿Que opción desea elegir?\n1-Comprar\n2-Agregar Producto Nuevo\n3-Ordenar Productos Alfabeticamente\n4-Filtrar Productos por Categoria\n5-Ver el Precio de los Productos\n6-Consultar Unidades Disponibles\n7-Mostrar lista de productos\n0-Salir\n")
//     while (opcionDeMenu != "0") {
//         switch (opcionDeMenu) {
//             case "1":
//                 comprarProductos()
//                 break
//             case "2":
//                 agregarProducto()
//                 alert("Se muestra en consola la opción agregada\nSeleccionando la opción 7")
//                 break
//             case "3":
//                 ordenarPorNombre()
//                 break
//             case "4":
//                 filtrado()
//                 alert("Veras los productos filtrados en la consola")
//                 break
//             case "5":
//                 nombrePrecioDos()
//                 break
//             case "6":
//                 stock()
//                 break
//             case "7":
//                 console.log(verduleria)
//                 alert("Has activado esta opción\nSe mostrara en consola")
//                 break
//             default:
//                 alert("El numero ingresado no es correcto, vuelva a intentarlo")
//                 break
//         }
//         opcionDeMenu = prompt("¿Que opción desea elegir?\n1-Comprar\n2-Agregar Producto Nuevo\n3-Ordenar Productos Alfabeticamente\n4-Filtrar Productos por Categoria\n5-Ver el Precio de los Productos\n6-Consultar Unidades Disponibles\n7-Mostrar lista de productos\n0-Salir\n")
//     }
//     alert("Gracias por su visita, vuelva pronto")
// }
// listaDeCompras()

