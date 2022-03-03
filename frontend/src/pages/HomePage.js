// import React, { useEffect, useState } from 'react'
import React, {useEffect} from 'react'
import Product from '../compontents/Product';
// import data  from '../data';
// import axios from 'axios';
import LoadingBox from '../compontents/LoadingBox';
import MessageBox from '../compontents/MessageBox';
import { useDispatch,useSelector } from 'react-redux'

import { listproducts } from '../actions/productactions';


export default function HomePage() {
  // const[loading,setLoading] = useState(false);
  // const[products,setProducts] =  useState([]);
  // const[error,setError] = useState(false);
  const dispatch = useDispatch();
  const productlist = useSelector(state =>state.productlist)
  const {loading, error,products } = productlist;
  useEffect(()=>{
          dispatch(listproducts());
    // const fecthData = async()=>{
    //   try{
    //     setLoading(true);
    //   const {data} = await axios.get('api/products');
    //   setLoading(false);
    //     setProducts(data);
    //   }
    //   catch(err){
    //     setError(err.message);
    //     setLoading(false);
    //   }
      
      
    // };
    // fecthData();

  },[dispatch]);
   

  return (
    <div>
      {loading?<LoadingBox></LoadingBox>:
      error?<MessageBox variant="danger">{error}</MessageBox>:
      <div className="row center">
        {products.map((product) =>(
         <Product key={product.id} product={product}></Product>
        ))
        
        }   
      </div>
      }
        

      </div>
    )
}
