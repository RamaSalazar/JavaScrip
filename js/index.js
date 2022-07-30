class products{
    constructor(id, product, description, price){
        this.id = id,
        this.product = product,
        this.description = description,
        this.price = price

    }

    showData(){
        console.log(`El producto es ${this.product} su descripcion es ${this.description} y su vales es $${this.price}. La id del producto es ${this.id}`)
    }
}

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

const stock = [product1,product2,product3,product4,product5,product6]