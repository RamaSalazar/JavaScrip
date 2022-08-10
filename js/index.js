class Products{
    constructor(id, product, description, price, img){
        this.id = id,
        this.product = product,
        this.description = description,
        this.price = price,
        this.img = img

    }
    showData(){
        console.log(`El producto es ${this.product} su descripcion es ${this.description} y su vales es $${this.price}. La id del producto es ${this.id}`)
    }
}

let article = []
const product1 = new Products(1,"Poncho","poncho adulto de hilo de 1.8 mts", 6000, "./img/poncho.png")
article.push(product1)
const product2 = new Products(2,"Ruana","ruana adulto de hilo de 1.8 mts", 5500,"./img/ruana.png")
article.push(product2)
const product3 = new Products(3,"Alpargatas","alpargatas de eco-cuero o gabardina. Talle 35 - 43", 2000,"./img/alpargata1.png")
article.push(product3)
const product4 = new Products(4,"Remera","remera de algodon primera calidad. Talle S - XXL", 1400,"./img/remera2.png")
article.push(product4)
const product5 = new Products(5,"Bombacha de gaucho","bombacha de gaucho de gabarnida primera calidad con bordaos", 6500, "./img/bombacha1.png")
article.push(product5)
const product6 = new Products(6,"Boina","boinas de hilo de adulto o nio marca -El llano-", 2300, "./img/boina.png")
article.push(product6)

const stock = [product1,product2,product3,product4,product5,product6]

// function showCatalog(){
//     alert(`Podrá ver nuestro catálogo en la consola:`)
//     for(let article of stock){
//         article.showData()
//     }
// }

// function searchProduct(){
//         let search = prompt("Ingrese el producto que desea buscar")
//         let searched = stock.find((sea)=>sea.product.toLowerCase() == search.toLowerCase())
//         if(searched == undefined){
//             console.log("No disponemos de ese producto")
//         }else{
//             console.log(`Tenemos el producto ${searched.product} y su precio es $${searched.price}`)
//         }
        
// }

// function orderPrice(){
//     let option = prompt(`Ingrese MAYOR para ordenar de mayor a menor
//                          Ingrese MENOR para ordenar de menor a mayor
//     `)
//     if(option.toUpperCase() == "MAYOR"){
//         console.log(stock.sort((a,b)=> (b.price - a.price)))
//     }
//     else if(option.toUpperCase() == "MENOR"){
//         console.log(stock.sort((a,b)=> (a.price - b.price)))
        
//     }
// }

// function discount(){
//     let disc = prompt( "Ingrese el cupon del descuento")
//     if (disc  == "KUNTUR")
//     {discount = stock.map((elemnt)=>elemnt.price *0.90)
   
// console.log("El cupon fue aplicado correctamente, el nuevo precio es $" + discount)
// }
// else {disc != "KUNTUR"
//     console.log("Cupon invalido. Ingrese otro");
// }
// }

// function askOptions(){
//     let option = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
//                         1 - Ver catálogo de productos
//                         2 - Buscar producto disponibles:
//                         3 - Ordenar por precio:
//                         4 - Agregar cupon
//                         0 - Para salir
//                         `))
//     menu(option)
// }

// function menu(optionSelect){
//     switch(optionSelect){
//         case 0:
//             salir = true
//             alert("Gracias por visitarnos, vuelva pronto :D")
//         break    
//         case 1:
//             showCatalog()

//       	break 
//    	    case 2: 
//            searchProduct()
//       	break 
//    	    case 3: 
//            orderPrice()
//       	break
//         case 4: 
//             discount()

//       	break 
//    	    default: 
//       	alert("Ingrese una opción correcta")
//     }
// }

// let salir 
// while(salir != true){
//     askOptions()
    
// }

// let cardProduct = document.getElementById("card__style")
// stock.forEach((prod)=>{
//     let cardStock = document.createElement("div")
//     cardStock.innerHTML = ` <article class="card">
//                                     <h2 class="card__title">${prod.product}</h2>
//                                     <picture class="hola">
//                                         <img class="card__img" src="${prod.img}" alt="">
//                                     </picture>
//                                     <p class="card__description">${prod.description}</p>
//                                     <h4 class="card__price">$${prod.price}</h4>
//                                     <button class="card__button">Agregar al carrito</button>
//                                 </article>`
//     cardProduct.appendChild(cardStock)

// })


let articleProducts = document.getElementById("products")
articleProducts.setAttribute("class", "productsStyle")
function seeProducts(){

    stock.forEach((prod)=>{
        let newProduct = document.createElement("div")
        newProduct.innerHTML = ` <article class="card">
                                        <h2 class="card__title">${prod.product}</h2>
                                        <picture class="hola">
                                            <img class="card__img" src="${prod.img}" alt="">
                                        </picture>
                                        <p class="card__description">${prod.description}</p>
                                        <h4 class="card__price">$${prod.price}</h4>
                                        <button class="card__button">Agregar al carrito</button>
                                    </article>`
        articleProducts.appendChild(newProduct)
    
    })  
    
}

function ignoreProducts(){
    articleProducts.innerHTML =""
}

let seeProductsBtn = document.getElementById("seeProducts")
seeProductsBtn.addEventListener("click", seeProducts)

let ignoreProductsBtn = document.getElementById("ignoreProducts")
ignoreProductsBtn.onclick = ignoreProducts

