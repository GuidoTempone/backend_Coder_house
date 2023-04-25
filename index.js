class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        throw new Error("The code for this product already exist.");
      }
  
      
      const id = Math.floor(Math.random() * 100000);
  
      
      const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      
      this.products.push(newProduct);
  
     
      return newProduct;
    }
  
    getProductById(id) {
     
      const product = this.products.find(product => product.id === id);
  
      
      if (!product) {
        throw new Error("This product doesn't exist.");
      }
  
      
      return product;
    }
  }
  
  
  const productManager = new ProductManager();
  
  
  console.log(productManager.getProducts());
  
 
  const newProduct = productManager.addProduct("test product1", "This is a test product", 200, "No image", "ab100", 25);
  
 
  console.log(productManager.getProducts());
  

  try {
    productManager.addProduct("test product2", "This is a test product", 170, "No image", "ab101", 25);
  } catch (error) {
    console.error(error.message);
  }
  

  console.log(productManager.getProductById(newProduct.id));
  

  try {
    productManager.getProductById(99999);
  } catch (error) {
    console.error(error.message);
  }
  