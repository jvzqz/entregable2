const fs = require ('js');
const crypto = require ('crypto');


class ProductManager {

    constructor(){
        this.path = 'products.txt';
        this.products = [];
        this.id = 1;
    } 

    addProduct (tittle, description, price, thumbnail, code, stock) {
        for (let i=0; i< this.products.length; i++){
            if(this.products[i]["code" === code]){
                console.log ("El código está repetido");
                return;
            }
        }
        if (!tittle || !description || !price || !thumbnail || !code || !stock){
            console.error ("Los campos son obligatorios");
            return;
        
        }
        const product = {
            id: this.id++,
            tittle,
            description,
            price,
            thumbnail,
            code,
            stock,
          };
        
    this.products.push (product);
      
    console.log ("Producto agregado correctamente");
    
    fs.writeFileSystnc(this.path, JSON.stringify(this.products, null, 2), (err)=> {
        if (err) {
            console.log ("No se pudo escribir");
        } }
    )};
    
    getProducts () {
     fs.readFileSync(this.path, JSON.parse(this.products, null, 2), (err)=> {
        if (err) {
            console.log ("No se pudo leer");
        } }
    ) 

    return this.products;
    }
    
    getProductById(id) {
    fs.readFileSync(this.path, JSON.parse(this.products, null, 2), (err)=> {
        if (err) {
            console.log ("No se pudo leer");
        }
    })
    const exist = this.products.find((product) => product.id == id);
    !exist ? console.log("Not Found") : false;
    return exist;
    }
    
    updateProducts(){
    const productId = this.product.filter((products) => products.id != id);
   
    s.writeFileSystnc(this.path, JSON.stringify(this.productId, null, 2), (err)=> {
        if (err) {
            console.log ("No se pudo escribir");
        } }
    )}
     

    deleteProducts (){
        fs.unlink(this.path, JSON.stringify(this.products, null, 2), 'utf-8')
    }
  
}