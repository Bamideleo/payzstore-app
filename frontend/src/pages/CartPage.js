import React, { useEffect } from 'react';
import { Link, useParams,useLocation, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartaction';
import MessageBox from '../compontents/MessageBox';

export default function CartPage(props) {
    const navigate=useNavigate();
    const cart = useSelector((state)=>state.cart);
    const {cartItems} = cart;
    const { search } = useLocation();
    const param = useParams();
    const productId = param.id;
    const qty = search ? Number(search.split("=")[1]) : 1;
   const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch, productId,qty]);
    const removeFromCartHander = (id)=>{
        // delete action
    }
    const checkoutHandler = ()=>{
        navigate('/signin?redirect=shipping');  
    }
    return (
      <div className="row top">
          <div className="col-2">
              <h1>Shopping Cart</h1>
              {cartItems.length === 0?<MessageBox>
                  Cart is empty. <link to="/">Go Shopping</link>
              </MessageBox>:
              <ul>
                  {cartItems.map((item)=>(
                      <li key={item.product}>
                          <div className="row">
                              <img src={`/${item.image}`} alt={item.name} className="small "/>
                          
                           <div className="min-30">
                               <Link to={`/product/${item.product}`}>{item.name}</Link>
                           </div>
                           <div className="">
                               <select value={item.qty} onChange={e =>dispatch(addToCart(item.product , Number(e.target.value))
                                )}>
                               {
                                                [...Array(item .countInStock).keys()]. map(x => (
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                ))
                                                }
                               </select>
                           </div>
                           <div className=""> ${item.price}</div>
                           <div className="">
                               <button type="button" onClick={()=> removeFromCartHander(item.product)}> Delete </button>
                           </div>
                           </div>
                      </li>
                  ))}
              </ul>
              }
          </div>
          <div className="col-1">
              <div className="card card-body">
                  <ul>
                      <li>
                          <h3>Subtotal ({cartItems.reduce((a,c)=>a + c.qty,0)} items): ${cartItems.reduce((a,c) => a + c.price *c.qty,0)} </h3>
                      </li>
                      <li>
                        <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length ===0}>Proceed to Checkout</button>
                      </li>
                  </ul>
              </div>
          </div>
      </div> 
    )
}
