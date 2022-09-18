 // Class
 class Products{
    constructor(id, product, description, price, img, cant){
        this.id = id,
        this.product = product,
        this.description = description,
        this.price = price,
        this.img = img,
        this.cant = cant

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
        let newProd = new Products(prod.id, prod.product, prod.description, prod.price, prod.img, prod.cant)
        stock.push (newProd)
    }
})


// Variables / Const
// Botones
let btnDarkMode = document.getElementById("btn__dark__mode")
let btnLightMode = document.getElementById("btn__light__mode")
let btnShipp = document.getElementById("btn__shipp")
let btnBuy = document.getElementById("btn__buy")
let btnCart = document.getElementById("cart__btn")
const btnRemove = document.getElementById("btn__removeCart")
const btnClose = document.getElementById("btn__close")
const btnNext = document.getElementById("btn__next")
const btnPrev = document.getElementById("btn__prev")
let buyCart = document.getElementById("btn__buy--cart")


let articleProducts = document.getElementById("products")
let hide__text__btn = document.getElementById ("hide__text__btn")
let hide__text = document.getElementById("hide__text")
let search = document.querySelector(".search")
const contCart = document.getElementById("cont__cart")
const counterCart = document.getElementById("acc__cart")
const totalPrice = document.getElementById("total__price")
const lightBox = document.getElementById("contain__main")
const imgAct =document.getElementById("img__act")
const images =document.querySelectorAll("#galery img")
const cartModal = document.getElementById("modal__cart")
let contador=0
let indexImg =0;
let cart = []

// DARK MODE

const mode = document.getElementById("night")
const body = document.querySelector("body")

mode.addEventListener("change",()=>{
    if(body.classList.toggle("nightMode")){
        localStorage.setItem("darkMode", "dark")
    }else{
        localStorage.setItem("darkMode", "light")
        document.body.classList.remove("nightMode")
    }
})

let darkMode = localStorage.getItem("darkMode")
if(darkMode == "dark"){
    document.body.classList.add("nightMode")
}else{
    localStorage.setItem("darkMode", "light")
    document.body.classList.remove("nightMode")
}

// MAIN

// Catalogo
articleProducts.setAttribute("class", "productsStyle")
hide__text__btn.addEventListener("click", toggleText)
 function toggleText(){
    hide__text.classList.toggle("show")
    articleProducts.innerHTML= ""
    if(hide__text.classList.contains("show")){
    hide__text__btn.innerHTML = "ver menos"
    search.style.display = 'flex'
    }
    else {
    hide__text__btn.innerHTML = "ver mas"
    search.style.display = 'none'
    }

    stock.forEach((prod) =>{
    let newProduct = document.createElement("div")   
    setTimeout(()=>{
        Swal.fire({
            title: 'Hola',
            text: `Cualquier consulta que tengas escribinos al WhatsApp`,
            icon: 'info',
            showConfirmButton:false,
            timer:3000
          })
    },2000)
    newProduct.innerHTML = `
                            <article class="card">
                                <h2 class="card__title">${prod.product}</h2>
                                <picture>
                                    <img class="card__img" src="${prod.img}" alt="">
                                </picture>
                                <p class="card__description">${prod.description}</p>
                                <h4 class="card__price">$${prod.price}</h4>
                                <button id="addToCart${prod.id}" class="card__button" >Agregar al carrito</button>
                            </article>
                           `
 
    articleProducts.appendChild(newProduct)
    const btnAddCart = document.getElementById( `addToCart${prod.id}`)
    btnAddCart.addEventListener("click",()=>{
    addCart(prod.id)

})

}
)}

// Buscador

document.addEventListener("keyup", e=>{

    if (e.target.matches("#searcher")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".card").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filter")
              :fruta.classList.add("filter")
        })
  
    }
  
  
  })

// Carrito

const addCart = (prodId) => {
    const exits = cart.some (prod => prod.id === prodId)

if(exits){
    const prod = cart.map (prod => {
        if (prod.id === prodId){
            prod.cant++
        }
    })
}else{
    const item =  stock.find ((prod) => prod.id === prodId) 
    cart.push (item)
    // console.log(cart);

}
actCart()
}
  
const actCart = () =>{ 
    contCart.innerHTML = "Aca te vamos a mostrar tus productos"
    cart.forEach((prod) =>{
        const div = document.createElement("div")
        div.className = ("products__cart")
        div.id = ("products__cart")
    div.innerHTML =  `
                        <h3>${prod.product}</h3>
                        <h4>precio: ${prod.price}</h4>
                        <p>cantidad: <spam id="cantidad">${prod.cant}</spam></p>
                        <button onclick = "deletCart(${prod.id})" class="btn__delete"><img src="./img/delete.svg" alt=""></button>
                                `
        contCart.appendChild(div)
    })
    counterCart.innerHTML = cart.length
    totalPrice.innerHTML = cart.reduce((acc, prod) => acc + prod.price * prod.cant,0)
    addLocalStorage()
}

const deletCart = (prodId) =>{
    
    const exits = cart.some (prod => prod.id === prodId)
    if(exits){
        const prod = cart.map (prod => {
            if (prod.id === prodId){
                prod.cant = 0
            }
        })
    }
    const item = cart.find((prod) =>prod.id === prodId)
    const indice = cart.indexOf(item)
    cart.splice(indice,1)
    actCart()
    
}

btnRemove.addEventListener("click",()=>{
    cart.length = 0 
    actCart()
})


function cartBuy (prodId){
 const item = cart.find((prod) =>prod.id === prodId)
 const indice = cart.indexOf(item)
 cart.splice(indice,1)
 actCart()
     contCart.innerHTML = ""
 const div = document.createElement("div")
 div.className = ("products__cart")
 div.innerHTML =" gracias por tu compra =) " 
contCart.appendChild(div)
totalPrice.innerHTML = "0"
}

buyCart.addEventListener("click",cartBuy)

// galeria

const openLightBox = (e) =>{
    imgAct.src = e.target.src;
    lightBox.style.display = 'flex'
    indexImg = Array.from(images).indexOf(e.target)
}

images.forEach((imagen)=>{
    imagen.addEventListener("click",openLightBox)
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

// footer

// Preguntas Frecuentes
function funShipp (){
if (contador==0)
{
btnShipp.innerHTML +=   `
        <section class="modal__quest">
        <h1 class"modal__title">ENVIO</h1>
        <h2 class"modal__subtitle"> Como recibo mi producto?</h2>
        <p class"modal__text"> Si realizas el envio por la pagina, vas a recibir tus productos por medio del transporte selecionado</p>
        <p class"modal__text"> Si sos de Tucuman podes coordinar con nosotros y te lo enviamos por cadete</p>
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

function funBuy (){
if (contador==0)
{
btnBuy.innerHTML +=   `
        <section class="modal__quest">
        <h1 class"modal__title">COMO COMPRAR</h1>
        <h2 class"modal__subtitle"> Te contamos las formas que tenes para realizar una compra</h2>
        <p class"modal__text"> 1- Atravez de la pagina desde cualquier parte de la Argentina</p>
        <p class"modal__text"> 2- Podes contactarnos por WhatsApp</p>
        </section>
                        `
contador=1}
else{btnBuy.innerHTML =   `
        Como Comprar
                            `
    contador=0
    
}
}
btnBuy.addEventListener ("click",funBuy,true)

// Local Storage
 function addLocalStorage(){
    localStorage.setItem("cart", JSON.stringify(cart))
 }
 window.onload = function(){
    const storage = JSON.parse(localStorage.getItem("cart"))
    if(storage){
        cart = storage
        totalPrice.innerHTML = cart.reduce((acc, prod) => acc + prod.price * prod.cant,0)
        actCart()

    }
 }

