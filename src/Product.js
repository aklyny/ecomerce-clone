import React from 'react';
import './Product.css'
import {useStateValue} from './StateProvider'

const Product = ({id,name,price,image,rating})=>{
    const [{},dispatch] = useStateValue()
    const addToCart = ()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id,
                name,
                price,
                rating,
                image
            },
        })
    }
    return(
        <div className="product">
        <div className="product__info">
        <p>{name}</p>
            <p className="product__price"><small>$</small><strong>{price}</strong></p>
            <div className="product__rating">
           {Array(rating)
           .fill()
           .map((_,i)=>(
               <p key={i}>*</p>
           ))
           }
        </div>
    </div>
    <img src={image} alt="" />
        <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
