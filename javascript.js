// 2da PRE-ENTREGA

let verduleria = [
    { id: 1, nombre: "manzana", categoria: "frutas", unidades: 15, precio: 500 },
    { id: 2, nombre: "banana", categoria: "frutas", unidades: 20, precio: 650 },
    { id: 3, nombre: "kiwi", categoria: "frutas", unidades: 10, precio: 800 },
    { id: 4, nombre: "zanahoria", categoria: "verduras", unidades: 12, precio: 1200 },
    { id: 5, nombre: "lechuga", categoria: "verduras", unidades: 5, precio: 1000 },
    { id: 6, nombre: "tomate", categoria: "verduras", unidades: 8, precio: 750 }
]

//---------------------------------------------------------------------------

function comprarProductos() {
    let numero = prompt("¿Que desea comprar?\n1-Manzanas\n2-Bananas\n3-Kiwi\n4-Zanahoria\n5-Lechuga\n6-Tomate\n7-Finalizar Compra")
    let sumaTotal = 0
    while (numero != "0") {
        switch (numero) {
            case "1":
                alert("Has elegido Manzanas")
                sumaTotal = sumaTotal + 500
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "2":
                alert("Has elegido Bananas")
                sumaTotal = sumaTotal + 650
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "3":
                alert("Has elegido Kiwi")
                sumaTotal = sumaTotal + 800
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "4":
                alert("Has elegido Zanahoria")
                sumaTotal = sumaTotal + 1200
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "5":
                alert("Has elegido Lechuga")
                sumaTotal = sumaTotal + 1000
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "6":
                alert("Has elegido Tomate")
                sumaTotal = sumaTotal + 750
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "7":
                alert("¡Muchas gracias por elegirnos!\nSu compra total fue de " + "$" + sumaTotal)
                return;
            default:
                alert("El número ingresado es incorrecto, vuelva a intentarlo")
        }
        numero = prompt("¿Que desea comprar?\n1-Manzanas\n2-Bananas\n3-Kiwi\n4-Zanahoria\n5-Lechuga\n6-Tomate\n7-Salir del menu de compras")
    }
}

//---------------------------------------------------------------------------

// CONSULTAR STOCK (DISPONIBILIDAD) (FUNCIONA) (FIND)
function stock() {
    while (true) {
        let opcionDeLista = prompt("1-Consultar stock\n2-Volver al menu principal")

        if (opcionDeLista == "1") {
            let nombre = prompt("Ingrese el nombre del producto que desea saber su disponibilidad:\n-Manzana\n-Banana\n-Kiwi\n-Zanahoria\n-Lechuga\n-Tomate")
            let unidadesDisponibles = verduleria.find(verduleria => verduleria.nombre === nombre.toLowerCase())
            alert("Hay disponibles " + unidadesDisponibles.unidades + " " + " unidades")
        }
        if (opcionDeLista == "2") {
            alert("Volviendo al menu principal")
            break
        }
    }
}

//-------------------------------------------------------------------------------------------------------

// MOSTRAR LOS PRECIOS DE LOS PRODUCTOS (FUNCIONA) (FIND)
function nombrePrecioDos() {
    let precioProducto = prompt("Ingrese el nombre del producto que desea saber el precio:\n-Manzana\n-Banana\n-Kiwi\n-Zanahoria\n-Lechuga\n-Tomate")
    const precioPedido = verduleria.find(productos => productos.nombre === precioProducto.toLowerCase())
    alert("El precio del producto" + " " + precioPedido.nombre + " " + "es de " + " " + "$" + precioPedido.precio)
}

//-------------------------------------------------------------------------------------------------------

// ORDENAR PRODUCTOS ALFABETICAMENTE (FUNCIONA) (SORT)
function ordenarPorNombre() {
    verduleria.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1
        }
        if (a.nombre > b.nombre) {
            return 1
        }
        return 0
    })
    let precioProductos = ""
    verduleria.forEach(verduleras => {
        precioProductos = precioProductos + " " + verduleras.nombre + " $" + verduleras.precio + " " + "\n"
    })
    alert("Lista ordenada alfabeticamente:" + "\n" + precioProductos)
}

//---------------------------------------------------------------------------

// FILTRAR POR CATEGORIA (NO FUNCIONA TODAVIA) (FILTER)
function filtrado() {
    let nombreDos = prompt("Ingrese el nombre de la categoria que desea buscar:\n-Frutas\n-Verduras")
    let variasCategorias = verduleria.filter(verduleria => verduleria.categoria === nombreDos.toLowerCase())
    console.log(variasCategorias)
}

//---------------------------------------------------------------------------

// AGREGAR NUEVO PRODUCTO (PUSH)
function agregarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del producto que desea agregar")
    let categoriaProducto = prompt("Ingrese la categoria en que desea agregar su nuevo producto:\n-Frutas\n-Verduras")
    let unidadesProducto = Number(prompt("Ingrese las unidades a agregar"))
    let precioProducto = Number(prompt("Ingrese el precio del producto por kilo"))
    const nuevoProducto = {
        id: verduleria.length + 1,
        nombre: nombreProducto.toLowerCase(),
        categoria: categoriaProducto.toLowerCase(),
        unidades: unidadesProducto,
        precio: precioProducto
    }
    verduleria.push(nuevoProducto)
}

//---------------------------------------------------------------------------

// MENU DE OPCIONES 
function listaDeCompras() {
    alert("Bienvenidos a la Verduleria Online")
    let opcionDeMenu = prompt("¿Que opción desea elegir?\n1-Comprar\n2-Agregar Producto Nuevo\n3-Ordenar Productos Alfabeticamente\n4-Filtrar Productos por Categoria\n5-Ver el Precio de los Productos\n6-Consultar Unidades Disponibles\n7-Mostrar lista de productos\n0-Salir\n")
    while (opcionDeMenu != "0") {
        switch (opcionDeMenu) {
            case "1":
                comprarProductos()
                break
            case "2":
                agregarProducto()
                alert("Se muestra en consola la opción agregada\nSeleccionando la opción 7")
                break
            case "3":
                ordenarPorNombre()
                break
            case "4":
                filtrado()
                break
            case "5":
                nombrePrecioDos()
                break
            case "6":
                stock()
                break
            case "7":
                console.log(verduleria)
                alert("Has activado esta opción\nSe mostrara en consola")
                break
            default:
                alert("El numero ingresado no es correcto, vuelva a intentarlo")
                break
        }
        opcionDeMenu = prompt("¿Que opción desea elegir?\n1-Comprar\n2-Agregar Producto Nuevo\n3-Ordenar Productos Alfabeticamente\n4-Filtrar Productos por Categoria\n5-Ver el Precio de los Productos\n6-Consultar Unidades Disponibles\n7-Mostrar lista de productos\n0-Salir\n")
    }
    alert("Gracias por su visita, vuelva pronto")
}
listaDeCompras()

