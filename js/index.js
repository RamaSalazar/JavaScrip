// Class
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

// Arrays
// Ropa

let clothing = []
const cloth2 = new Products(1,"Remera","remera de algodon primera calidad. Talle S - XXL", 1400,"./img/remera2.png")
clothing.push(cloth2)
const cloth3 = new Products(2,"Bombacha de gaucho","bombacha de gaucho de gabarnida primera calidad con bordaos", 6500, "./img/bombacha1.png")
clothing.push(cloth3)
const cloth1 = new Products(3,"Alpargatas","alpargatas de eco-cuero o gabardina. Talle 35 - 43", 2000,"./img/alpargata1.png")
clothing.push(cloth1)


// Tejidos

let fabrics = []

const fabr1 = new Products(4,"Poncho","poncho adulto de hilo de 1.8 mts", 6000, "./img/poncho.png")
clothing.push(fabr1)
const fabr2 = new Products(5,"Ruana","ruana adulto de hilo de 1.8 mts", 5500,"./img/ruana.png")
clothing.push(fabr2)
const fabr3 = new Products(6,"Boina","boinas de hilo de adulto o nio marca -El llano-", 2300, "./img/boina.png")
clothing.push(fabr3) 

// Accesorios

let accessories = []

// STOCK
const stock = clothing.concat(fabrics, accessories);

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

// DARK MODE

let btnDarkMode = document.getElementById("btn__dark__mode")
let btnLightMode = document.getElementById("btn__light__mode")

let dark__mode = localStorage.getItem("dark__mode") ? localStorage.getItem("dark__mode") : localStorage.setItem("dark__mode", "light")
console.log(localStorage.getItem("dark__mode"))
 
if(dark__mode == "dark"){
    document.body.classList.add("dark__mode")
}

btnDarkMode.addEventListener("click", ()=>{
    document.body.classList.add("dark__mode")
    localStorage.setItem("dark__mode", "dark")

})
btnLightMode.addEventListener("click", ()=>{
    document.body.classList.remove("dark__mode")
    localStorage.setItem("dark__mode", "light")
})

// Catalogo

let articleProducts = document.getElementById("products")
articleProducts.setAttribute("class", "productsStyle")

 let hide__text__btn = document.getElementById ("hide__text__btn")

 let hide__text = document.getElementById("hide__text")

 hide__text__btn.addEventListener("click", toggleText)


 function toggleText(){
// prueba
// toggleText = hide__text.classList.toggle("show") ? (articleProducts.innerHTML= "" , (hide__text__btn.innerHTML = "ver menos" ,  hide__text.classList.contains("show"))) : (hide__text__btn.innerHTML = "ver mas" )
// fin
    hide__text.classList.toggle("show")
    
    articleProducts.innerHTML= ""
    
    if(hide__text.classList.contains("show")){
    
    hide__text__btn.innerHTML = "ver menos"
    
    }
    
    else {
    
    hide__text__btn.innerHTML = "ver mas"
    
    }
    
    stock.forEach((prod) =>{
    
    let newProduct = document.createElement("div")
    
    newProduct.innerHTML = ` <article class="card">
                                            <h2 class="card__title">${prod.product}</h2>
                                            <picture class="hola">
                                                <img class="card__img" src="${prod.img}" alt="">
                                            </picture>
                                            <p class="card__description">${prod.description}</p>
                                            <h4 class="card__price">$${prod.price}</h4>
                                            <button class="card__button" id="addToCart${prod.id}">Agregar al carrito</button>
                                        </article>`
    articleProducts.appendChild(newProduct)
            let addBtn = document.getElementById(`addToCart${prod.id}`)
            // console.log(addBtn);

            addBtn.addEventListener("click", ()=> addToCart(prod))
    })
    
    }

// Agregar al carrito

let stockCart = []
let productsInCart = []


let modalCart = document.getElementById("modal__cart")
let cartBtn = document.getElementById("cart__btn")
let textCart = document.getElementById("text__cart")

cartBtn.addEventListener("click", () =>{
    addProdcutsToCart(productsInCart)
})

// pruba
// stockCart = localStorage.getItem("stock") ? console.log(stockCart) : console.log("primera vez")  , (localStorage.setItem("stock",JSON.stringify(stockCart)))
// fin

if(localStorage.getItem("stock")){
    stockCart = JSON.parse(localStorage.getItem("stock"))
    console.log(stockCart)
}
else{
    console.log("primera vez")
    stockCart.push(clothing.concat(fabrics, accessories))
    localStorage.setItem("stock",JSON.stringify(stockCart))
}


// prueba
// productsInCart = localStorage.getItem("cart") ? (JSON.parse(localStorage.getItem("cart"))) :    console.log("primera vez"), localStorage.setItem("cart",[]), console.log(productsInCart);
// fin
if(localStorage.getItem("cart")){
    productsInCart = JSON.parse(localStorage.getItem("cart"))
}
else{
    console.log("primera vez");
    localStorage.setItem("cart",[])
    console.log(productsInCart);
}
function addToCart(prod){
    console.log(`El producto es ${prod.product} su descripcion es ${prod.description} y su valor es $${prod.price}. Se agrego al carrito`);
    productsInCart.push(prod)
    console.log(productsInCart);
    localStorage.setItem("cart", JSON.stringify(productsInCart))
}

function addProdcutsToCart(productsStorage){

    modal__card.innerHTML = ""
    productsStorage.forEach((prodCart)=>{
        modal__card.innerHTML += ` <article class="card">
                                        <h2 class="card__title">${prodCart.product}</h2>
                                        <h4 class="card__price">$${prodCart.price}</h4>
                                    </article>`
    })

    total(productsStorage)

}

function total (totalPurchase){
    acum = 0;
        totalPurchase.forEach((cartTotal) =>{
        acum += cartTotal.price
    })
    console.log(acum);

    // prueba
// acum = 0 ? (textCart.innerHTML = `<p>Su carrito se encuentra vacio =(</p>`) :( `<p>El total de su compra es ${acum}</p>
// <button id="buy__btn">Finalizar Comrprar</button>`)
// let buyBtn = document.getElementById("buy__btn")
// buyBtn.addEventListener("click",()=>{
// total(productsInCart)
// modal__buy.innerHTML += ` <input type="number" name="numbercard" id="numbercard" placeholder="Ingrese el numero de la tarjeta">
//                             <input type="number" name="expday" id="expday" placeholder="Ingrese el vencimiento de la tajeta">
//                             <input type="number" name="codseg" id="codseg" placeholder="Ingrese el codigo de seguridad">
//                             <input type="text" name="name" id="name" placeholder="Ingrese el nombre del titular">
//                             <input type="number" name="dni" id="dni" placeholder="Ingrese el D.N.I. del titular">
//                             <button class="buy__btn" id="btn__buy"> Comprar</button>`
// let btnBuy = document.getElementById("btn__buy")
// btnBuy.addEventListener("click",buyBtnClick)
// })
// }
    // fin

    if(acum == 0){
        textCart.innerHTML = `<p>Su carrito se encuentra vacio =(</p>`
    }
    else {
        textCart.innerHTML = `<p>El total de su compra es ${acum}</p>
                                <button id="buy__btn">Finalizar Comrprar</button>`
        let buyBtn = document.getElementById("buy__btn")
        buyBtn.addEventListener("click",()=>{
            total(productsInCart)
                modal__buy.innerHTML += ` <input type="number" name="numbercard" id="numbercard" placeholder="Ingrese el numero de la tarjeta">
                <input type="number" name="expday" id="expday" placeholder="Ingrese el vencimiento de la tajeta">
                <input type="number" name="codseg" id="codseg" placeholder="Ingrese el codigo de seguridad">
                <input type="text" name="name" id="name" placeholder="Ingrese el nombre del titular">
                <input type="number" name="dni" id="dni" placeholder="Ingrese el D.N.I. del titular">
                <button class="buy__btn" id="btn__buy"> Comprar</button>`
                let btnBuy = document.getElementById("btn__buy")
                btnBuy.addEventListener("click",buyBtnClick)
            })
    }

}

function buyBtnClick(){
    addToCart.innerHTML=""
    total()
    // addProdcutsToCart.innerHTML=""
}


function formCard (){
    let numbercard = document.getElementById("numbercard").value;
    let expday = document.getElementById("expday").value;
    let codseg = document.getElementById("codseg").value;
    let name = document.getElementById("name").value;
    let dni = document.getElementById("dni").value;

    alert ("Su compra fue realizada")
}





