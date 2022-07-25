
let poncho = 6000

function cantidad(){
    let cantIngresada = parseInt(prompt ("Ingrese la cantidad de ponchos que desea comprar"))
    resultado(cantIngresada * poncho)
}
function resultado(total){
    console.log(`El total es ${total}`);
    alert ("Su total es de " + total + " .Muchas gracias por su compra")
}

cantidad()
