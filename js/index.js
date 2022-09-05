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

const stock = []
fetch("stock.json")
.then(resp => resp.json())
.then(data=>{
    console.log(data);
    for(let prod of data){
        let newProd = new Products(prod.id, prod.product, prod.description, prod.price, prod.img)
        stock.push (newProd)
    }
})
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
    
    // setTimeout(()=>{
    //     Swal.fire({
    //         title: 'Descuento',
    //         text: `No te olvides de ingresar nuestro descuento al momento de tu compra`,
    //         icon: 'info',
    //         showConfirmButton:false,
    //         timer:3000
    //       })
    // },2000)
    newProduct.innerHTML = ` <article class="card">
                                            <h2 class="card__title">${prod.product}</h2>
                                            <picture class="hola">
                                                <img class="card__img" src="${prod.img}" alt="">
                                            </picture>
                                            <p class="card__description">${prod.description}</p>
                                            <h4 class="card__price">$${prod.price}</h4>
                                            <button class="card__button" id="addToCart${prod.id}">Agregar al carrito</button>
                                        </article>
                                       `
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
let cartCont =document.getElementById("contCart")

cartBtn.addEventListener("click", () =>{
    addProdcutsToCart(productsInCart)
})


if(localStorage.getItem("stock")){
    stockCart = JSON.parse(localStorage.getItem("stock"))
    console.log(stockCart)
}
else{
    console.log("primera vez")
    stockCart.push(stock)
    localStorage.setItem("stock",JSON.stringify(stockCart))
}

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
    Swal.fire({
        title: 'FELICIDADES',
        text: `Se añadio ${prod.product} al carrito`,
        icon: 'info',
        confirmButtonText: 'Listo'
      })
    //   upCart()
}

function addProdcutsToCart(productsStorage){

    modal__card.innerHTML = ""
    productsStorage.forEach((prodCart)=>{
        modal__card.innerHTML += ` <article class="card">
                                        <h2 class="card__title">${prodCart.product}</h2>
                                        <h4 class="card__price">$${prodCart.price}</h4>
                                        <button id="botonEliminar${prodCart.id}">eliminar</button>
                                        <button id="vaciar">vaciar</button>
                                    </article>`
                                            // vaciar

    })



    total(productsStorage)

}

// let vaciar = document.getElementById("vaciar")
// vaciar.addEventListener("click",()=>{
//     vaciar.removeItem(productsInCarts)
// })
// Actualizar Carrito
// let upCart =() =>{
//     stock.forEach ((prod)=>{
//         let div = document.createElement("div")
//         div.className ("card")
//         div.innerHTML = ` 
//         <p> ${prod.title}</p>
//         <p> precio: ${prod.price}</p>
//         <p> Cantidad: <span id ="cant"></span>${prod.cant}</p>
//         <button onclick = "removeCart(${prod.id})">eliminar</button>
//         `
//         cartCont.appendChild(div)
//     })
// }

// Eliminar del carrito
let removeCart = ((prodId) =>{
    document.getElementById(`botonEliminar${prodCart.id}`).addEventListener("click",()=>{
        console.log(`Producto ${prodCart.title} eliminado`)
        let item = addToCart.find((prodCart) => prodCart.id === prodId)
        let index = addToCart.indexOf(item)
        addToCart.splice(index,1)
        stockCart()
    })

    
})
 


// prueba

// productsStorage.forEach((prodCart, indice)=>{
//     //capturamos el boton sin usar variable y adjuntamos evento
//     document.getElementById(`botonEliminar${prodCart.id}`).addEventListener('click', () => {
//         //Dentro del evento:
//         console.log(`Producto ${prodCart.title} eliminado`)
//         //Eliminamos del DOM
//         let cardProducto = document.getElementById(`card${prodCart.id}`)
//         console.log(cardProducto);
//         cardProducto.remove()

//         //Eliminamos del array compras
//         productsCart.splice(indice, 1)
//         console.log(productsCart)
//         localStorage.setItem("cart", JSON.stringify(productsCart))
//         //Vuelvo a imprimir
//         addProdcutsToCart(productsCart)
//     })  

// })

// productsStorage()

// Total
function total (totalPurchase){
    acum = 0;
        totalPurchase.forEach((cartTotal)=>{
        acum += parseInt(cartTotal.price)
        })
        console.log(acum)

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
             localStorage.removeItem("cart")
                })

            }
            
        }
        
// footer

// Preguntas Frecuentes

let btnShipp = document.getElementById("btn__shipp")
let contador=0
function funShipp (){
if (contador==0)
{
btnShipp.innerHTML +=   `
<section class="modal__quest">
<h1 class"modal__title">hola</h1>
<p class"modal__text">esto es una pruba</p>
</section>
                        `
contador=1}
else{btnShipp.innerHTML =   `
Envio
                            `
    contador=0
    
}
}
btnShipp.addEventListener ("click",funShipp,true)





let btnBuy = document.getElementById("btn__buy")
function funShipp (){
if (contador==0)
{
btnBuy.innerHTML +=   `
<section class="modal__quest">
<h1 class"modal__title">hola</h1>
<p class"modal__text">esto es una pruba</p>
</section>
                        `
contador=1}
else{btnBuy.innerHTML =   `
Como Comprar
                            `
    contador=0
    
}
}
btnBuy.addEventListener ("click",funShipp,true)



// galeria
const btnClose = document.getElementById("btn__close")
const btnNext = document.getElementById("btn__next")
const btnPrev = document.getElementById("btn__prev")
const lightBox = document.getElementById("contain__main")
const imgAct =document.getElementById("img__act")
const images =document.querySelectorAll("#galery img")
let indexImg =0;

const abriLigthBox = (e) =>{
    imgAct.src = e.target.src;
    lightBox.style.display = 'flex'
    indexImg = Array.from(images).indexOf(e.target)
}

images.forEach((imagen)=>{
    imagen.addEventListener("click",abriLigthBox)
})

btnClose.addEventListener("click",()=>{
    lightBox.style.display = 'none'
}) 

let adelantaImg = ()=>{
    if(indexImg === images.length -1) {
        indexImg = -1
    }
    imgAct.src = images[indexImg +1].src
    indexImg++
}

btnNext.addEventListener("click", adelantaImg)

let retrocedeImg =()=>{
    if(indexImg === 0 ){
        indexImg = images.length
    }
    imgAct.src = images[indexImg -1.].src
    indexImg--
}
btnPrev.addEventListener("click", retrocedeImg)

// machete
/* <p class="precioCard ${libro.precio <= 2000 ? "ofertaColor" : "precioComun"} ">Precio: ${libro.precio}</p> */