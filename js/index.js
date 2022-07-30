//Declaración de la clase
class products{
    constructor(id, product, description, price){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.product = product,
        this.description = description,
        this.price = price

    }
    //Métodos de nuestra clase
    showData(){
        console.log(`El producto es ${this.product} su descripcion es ${this.description} y su vales es $${this.price}. La id del producto es ${this.id}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos
let article = []
const product1 = new products(1,"Poncho","poncho adulto de hilo de 1.8 mts", 6000)
article.push(product1)
const product2 = new products(2,"Ruana","ruana adulto de hilo de 1.8 mts", 5500)
article.push(product2)
const product3 = new products(3,"Alpargatas","alpargatas de eco-cuero o gabardina. Talle 35 - 43", 2000)
article.push(product3)
const product4 = new products(4,"Remera","remera de algodon primera calidad. Talle S - XXL", 1400)
article.push(product4)
const product5 = new products(5,"Bombacha de gaucho", "bombacha de gaucho de gabarnida primera calidad con bordaos", 6500)
article.push(product5)
const product6 = new products(6,"Boinas", "boinas de hilo de adulto o nio marca -El llano-", 2300)
article.push(product6)

//Cargar array forma directa
//estanteria es nuestro array de objetos
const stock = [product1,product2,product3,product4,product5,product6]

//DECLARACIÓN DE FUNCIONES:

//Crear una function que permita al usuario agregar un libro

//mostrar catálogo

function showCatalog(){
    alert(`Podrá ver nuestro catálogo en la consola:`)
    //For of array de objetos
    for(let article of stock){
        //Accedo a atributos de mi array de objetos
        article.showData()
    }
}

//Function que consulte al usuario opción deseada
function askOptions(){
    let option = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver catálogo de productos
                        2 - Buscar producto disponibles por tipo:
                        3 - Buscar coincidencias:
                        0 - Para salir
                        `))
    menu(option)
}

//Function que ofrezca un menú
function menu(optionSelect){
    switch(optionSelect){
        case 0:
            salir = true
            alert("Gracias por visitarnos, vuelva pronto :D")
        break    
        case 1:
            showCatalog()

      	break 
   	    case 2: 
            nuevoLibro()
      	break 
   	    case 3: 
            eliminarLibro()
      	break
        case 4: 
      	 
      	break
        case 5: 
      	 
      	break 
   	    default: 
      	alert("Ingrese una opción correcta")
    }
}

//CÓDIGO:
let salir 
while(salir != true){
    askOptions()
    
}