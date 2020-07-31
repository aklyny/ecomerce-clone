import React from 'react';
import './checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = ()=>{
    const [{basket}] = useStateValue()
    return(
        <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt= "" />
       {
           basket?.length ===0 ?(
            <div>
            <h2 className="checkout__title">Shooping Cart is Empty</h2>
               <p>Add some products for billing to continue. To add products Click on "Add to carts"</p>
            </div>   
           )
           :(
               <div>
               <h2 className="checkout__title">Your Shopping Cart</h2>

               {
                   basket?.map((item,i)=>(
                       
                        <CheckoutProduct
                        key={i}
                        id = {item.id}
                        name={item.name}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                         />
                       
           ))
               }
               </div>
           )
       }
       </div>
       {
           basket.length > 0 && (
               <div className="checkout__right">
                    <Subtotal />
               </div>
           )
       }
        </div>
    )
}

export default Checkout;