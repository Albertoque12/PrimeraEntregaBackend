
const libro = {title: 'El principito', description: 'Para niños', price: 250, thumbnail: 'image', code: 1556, stock: 5}

const juguete = {title: 'Pelota', description: 'Objeto redondo', price: 50, thumbnail: 'image2', code: 1576, stock: 10}

const ropa = {title: 'Playera', description: 'Roja', price: 200, thumbnail: 'image3', code: 2454, stock: 6}



class ProductManager{

    constructor(){
      ProductManager.id += 0;
      this.products = []
      this.product = Product
    } 
    
    getProducts(){
      return this.products
    }
    addProduct(product){
      if(this.getProducts().find((p) => p.code == product.code)) return console.log(`Product with code: ${product.code} already exists `)
      else product.id =this.getProducts().length + 1; this.products.push(product)
    }
    
    getProductById(id){
      if(this.getProducts().find((p) => p.id == product.id)) return console.log(newProductManager.getProducts(product)) 
      else console.log(`Not found`)

    }


  }
  
  class Product extends ProductManager {
    constructor(title, description, price, thumbnail, code, stock){
      this.title = title
      this.description = description
      this.price = price
      this.thumbnail = thumbnail
      this.code = code
      this.stock = stock
    }
  }
  
  
  const newProductManager = new ProductManager()
  

  newProductManager.addProduct(libro)

  console.log(newProductManager.getProducts())

  newProductManager.addProduct(libro)
  console.log(newProductManager.getProducts())

  newProductManager.addProduct(juguete)
  console.log(newProductManager.getProducts())

  newProductManager.addProduct(ropa)
  console.log(newProductManager.getProducts())

