import React from 'react'

 const Navbar = (props)  => {

        return (
            <div style={styles.nav} >
                <div style={styles.cartIconContainer} > 
                    <span style={styles.cartCount}>{props.count}</span>
                    <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/2121/2121815.svg?token=exp=1616475690~hmac=6db3dffa8218f70235c13a3a0dbf3f31" alt="cart-icon" />
                    
                </div>
               
            </div>
        );
    
}

const styles ={
    cartIcon: {
        height: 32,
        marginRight: 20
        
    },
    nav: {
        height: 70,
        background: '#426762',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        
        position: 'relative'
    },
    cartCount: {
   
        background: 'yellow',
        borderRadius: '50%',
        padding: '40px 8px',
        position: 'absolute',
        right: 0,
        top: 9
    }
}



export default Navbar;
