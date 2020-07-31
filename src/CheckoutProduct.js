import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({id,name,image,rating,price})=>{
    const [{basket},dispatch] = useStateValue()
    const removeFromCart = ()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
        })
    }
    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__name">{name}</p>
            <p className="checkoutProduct__price"><small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p key={i}>*</p>
                    ))
                }
            </div>
            <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;