const Sequelize = require('sequelize');
const sequelize=require('../util/database');
const Cart = sequelize.define('cart',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
});
module.exports=Cart;














































// const fs=require('fs');
// const path=require('path');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'cart.json'
// );

// module.exports=class Cart{
//     static addProduct(id,productPrice)
//     {
//         //Fetch the Previous cart
//         fs.readFile(p,(err,fileContent)=>
//         {
//             let cart={product:[],totalPrice:0}
//              if(!err)
//              {
//                 cart=JSON.parse(fileContent);
//              }
//              //Analyze the cart =>find existing product
//                 const existingProductIndex=cart.products.findIndex(prod=>prod.id===id);
//                 const existingProduct=cart.products[existingProductIndex];
//                 let updatedProduct;
//                  //Add new product /increse quantity
//                 if(existingProduct)
//                 {
//                     updatedProduct={...existingProduct};
//                     updatedProduct.qty=updatedProduct.qty +1;
//                     cart.products=[...cart.products];
//                     cart.products[existingProductIndex]=updatedProduct;
//                 }
//                 else{
//                     updatedProduct={id:id,qty:1};
//                     cart.products=[...cart.products];
//                 }
//                 cart.totalPrice=cart.totalPrice+ +productPrice;     //to convert string to number add '+' sign in front of that variable
//                 fs.writeFile(p,JSON.stringify(cart),err=>{
//                     console.log(err);
//                 });
//         });
       
//     }
//     static deleteProduct(id,productPrice)
//     {
//         fs.readFile(p,(err,fileContent)=>{
//             if(err)
//             {
//                 return;
//             }
//             const updatedCart={...JSON.parse(fileContent)};
//             const product=updatedCart.products.find(prod=>prod.id===id);
//             if(!product)
//             {
//                 return;
//             }
//             const productQty=product.qty;
//             updatedCart.products=updatedCart.products.filter(prod=>
//               prod.id!==id
//             );
//             updatedCart.totalPrice=updatedCart.totalPrice-productPrice*productQty;

//             fs.writeFile(p,JSON.stringify(cart),err=>{
//                 console.log(err);
//             });
//         });
//     }

//     static getCart(cb)
//     {
//         fs.readFile(p,(err,fileContent)=>{
//             const cart=JSON.parse(fileContent);
//             if(err)
//             {
//                 cb(null);
//             }
//             else{
//                 cb(cart);
//             }
            
//         })
//     }

// };