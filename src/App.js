import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {

  constructor () {
    super();
    this.state ={
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80',
                id: 2
            },
            {
                price: 50000,
                title: 'Laptop',
                qty: 5,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
}
handleIncreaseQuantity = (product) =>{
    console.log('hey please inc the quantity of ', product);
    const{products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    
    this.setState({
        products
    })

}
handleDecreaseQuantity = (product) =>{
    console.log('hey please dec the quantity of ', product);
    const{products} = this.state;
    const index = products.indexOf(product);

   if( products[index].qty > 1){
    products[index].qty -= 1;
   }
    
    this.setState({
        products
    })

}

handleDeleteProduct = (id) =>{
    const{products} = this.state;

    const items = products.filter((item) => item.id != id)

    this.setState({
        products: items
        
    })
}
 getCartCount = ()=> {
  const {products} = this.state;
  let count = 0;
  
  products.forEach((product) =>{
    count += product.qty;
    console.log(count);
  })
  return count;
 }

 getCartTotal = () =>{
   const {products} = this.state
   let cartTotal = 0
   products.map((product)=>{
    cartTotal = cartTotal + product.qty * product.price
   })
   return cartTotal
 }
  render() {
    const {products} = this.state
    return (
      <div className="App">
         <Navbar count={this.getCartCount()} />
        < Cart
            products = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
         />
        <div style={{padding: 10,fontSize: 20}}> TOTAL: {this.getCartTotal()} </div> 
      </div>
    );
  }
 
}

export default App;
