// FOR

let tabla = parseInt(prompt("Que numero desea multiplicar?"))

for(let i=0; i<=10; i++){
    console.log(tabla + "x" + i + "=" + tabla*i);  
}

// WHILE

let cliente = prompt("Desea ingresar un nuevo cliente?")

while( cliente != "ESC"){
    let clienteWhile = prompt("Ingrese el nuevo cliente")
    console.log("Usted añadio a " + clienteWhile )
    cliente = prompt("Desea ingresar otro cliente? *ESC para salir")

}

