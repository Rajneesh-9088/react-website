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
                img: '',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: '',
                id: 2
            },
            {
                price: 50000,
                title: 'Laptop',
                qty: 5,
                img: '',
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
  render() {
    return (
      <div className="App">
         <Navbar count={this.getCartCount()} />
        < Cart />
  
      </div>
    );
  }
 
}

export default App;
