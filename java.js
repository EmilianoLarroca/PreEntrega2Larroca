let manzana = 1
let banana = 2
let kiwi = 3
let melon = 4
let sumaTotal = 0
let opcionManzanas

function hola() {
    alert("Bienvenidos a la Verduleria Online\n ¿Qué desea llevar?")
    alert("Antes de seguir avanzando, debemos preguntar su edad para corroborar de que usted es mayor de edad y pueda realizar compras de forma Online")
let edad = Number(prompt("Ingrese su edad"))
if (edad >= 18) {
    alert("Usted cumple con la edad requerida para realizar esta compra")
    let ingreseUnNumero = prompt("Ingrese la opcion deseada:\n 1-Manzana $500\n 2-Banana $650\n 3-Kiwi $800\n 4-Melon $1200\n 5-Ver total de la compra\n 6-Finalizar Compra\n 0-Salir")
    while (ingreseUnNumero != "0") {
        switch (ingreseUnNumero) {
            case "1":
                alert("Has elegido manzanas")
                /*opcionManzanas = prompt("¿Cuanto desea llevar? El kilo de manzana cuesta $500\n Pero contamos con las siguientes ofertas:\n A) 3kg a $1200\n B) 2kg a $850\n C) Solamente quiero 1kg")*/
                sumaTotal = sumaTotal + 500
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "2":
                alert("Has elegido bananas")
                /*let = prompt("¿Cuanto desea llevar? El kilo de bananas cuesta $650\n Pero contamos con las siguientes ofertas:\n A) 3kg a $1500\n B) 2kg a $1100\n C) Solamente quiero 1kg")*/
                sumaTotal = sumaTotal + 650
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "3":
                alert("Has elegido kiwi")
                /*let = prompt("¿Cuanto desea llevar? El kilo de kiwi cuesta $800\n Pero contamos con las siguientes ofertas:\n A) 3kg a $2000\n B) 2kg a $1450\n C) Solamente quiero 1kg")*/
                sumaTotal = sumaTotal + 800
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "4":
                alert("Has elegido melon")
            /*let = prompt("¿Cuanto desea llevar? El kilo de melon cuesta $1000\n Pero contamos con las siguientes ofertas:\n A) 3kg a $2700\n B) 2kg a $1800\n C) Solamente quiero 1kg")*/
                sumaTotal = sumaTotal + 1200
                alert("Tu saldo actual es de " + "$" + sumaTotal)
                break;
            case "5":
                alertaCinco()
                break;
            case "6":
                alertaSeis()
                return;
                default:
                    alert("El número ingresado es incorrecto, vuelva a intentarlo")
        }
        ingreseUnNumero = prompt("Ingrese la opcion deseada:\n 1-Manzana $500\n 2-Banana $650\n 3-Kiwi $800\n 4-Melon $1200\n 5-Ver total de la compra\n 6-Finalizar Compra\n 0-Salir")
    }
} else {
    alert("Usted no cumple con la edad requerida para seguir avanzando con esta compra")
}
function alertaSeis() {
    alert("Compra finalizada. El total de su compra es " + "$" + sumaTotal + "\n" + " ¡Muchas gracias por elegirnos!")
}
alert("Gracias por su visita, vuelva pronto")
}
function alertaCinco() {
    alert("Tu saldo es de " + "$" + sumaTotal)
}








