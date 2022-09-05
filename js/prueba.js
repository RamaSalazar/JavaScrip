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
            // let addBtn = document.getElementById(`addToCart${prod.id}`)
            // // console.log(addBtn);

            // addBtn.addEventListener("click", ()=> addToCart(prod))
    })
    
    }