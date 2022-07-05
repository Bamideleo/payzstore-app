import React, { useEffect, useState } from 'react'
import Rating from '../compontents/Rating';
// import data from '../data';
import { Link, useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from '../compontents/LoadingBox';
import MessageBox from '../compontents/MessageBox';
import { detailsProduct } from '../actions/productactions';
 
export default function ProductPage(props) {
      const param = useParams();
      const [qty,setQty] = useState(1);
    // const product = data.products.find((x)=>x.id === param.id);
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const productId = param.id;
    const productDetail = useSelector(state => state.productDetail);
    const {loading, error, product} = productDetail;
    // if(!product){
    //     return <div>Product Not Found</div>
    // }

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch,productId]);

    // this function is going to redirect user to cart page
    const addToCartHandler = () =>{
        navigate(`/cart/${productId}?qty=${qty}`); 
    }
    return ( 

        <div>
        {loading?<LoadingBox></LoadingBox>:
        error?<MessageBox variant="danger">{error}</MessageBox>:
       <div>
            <Link to="/">Back to  Home</Link>
           <div className="row top">
           <div className="col-2">
                    <img className="large" src={`/${product.image}`} alt={product.name}/>
            </div>

            <div className="col-1">
                   <ul>
                       <li>
                           <h1>{product.name}</h1>
                           </li>
                           <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                           </li>
                           <li>Price: ${product.price}</li>
                            <li>Description: {product.description}</li>
                   </ul>
            </div>

            <div className="col-1">
                 <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div className="">Price</div>
                                <div className="price"> ${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="">Status</div>
                                <div >
                                    {product.countInStock>0? <span className="success">In Stock</span>:
                                    <span className="danger">Unavailable</span>}
                                     </div>
                            </div>
                        </li>
                        {
                            product. countInStock > 0 && (
                                <>
                                <li>
                                    <div className="row">
                                        <div>Qty</div>
                                        <div>
                                            <select value={qty} onChange={e =>setQty(e.target.value)}>
                                                {
                                                [...Array(product.countInStock).keys()]. map(x => (
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </li>
                             <li>
                            <button onClick={addToCartHandler} className="primary block"> Add to Cart</button>
                        </li>
                                </>
                          
                            )
                        }
                        
                    </ul>
                 </div>
            </div>
 
            


    </div>

        </div> 
        }
        </div>

        
    )
}
