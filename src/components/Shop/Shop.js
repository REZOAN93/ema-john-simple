import React, { useEffect, useState } from 'react';
import data from "../../fakeData/products.json";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css';
const Shop = () => {
    const firstTen=data.slice(0,15);
    const [products,setProducts]=useState(firstTen);
    const [cart, setCart]=useState([]);


    const handleAddProduct=(props)=>{
        const newCart=[...cart,props]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(da=><Product 
                product={da}
                handleAddProduct={handleAddProduct}
                ></Product>)}
            </div>

           <div className='cart-container'>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;