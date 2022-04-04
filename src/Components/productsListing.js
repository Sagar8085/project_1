import React,{useEffect} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import { setProduct } from './Action/Products';


export default function Products() {
    
//   const products= useSelector((state)=>state);
//   const dispatch= useDispatch()
// // console.log(products);
//   const fetchProducts= async ()=>{
//     alert("fetch")
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//                       .catch((err)=>
//                       {
//                           console.log(err)
//                       })
                      
//                       // console.log(response);
//                       console.log("-----",response.data)
//                       dispatch(setProduct(response.data))

//   };
//   React.useEffect(()=>{
//       fetchProducts()
//   },[])
 

  return (
    <div>products</div>
  )
}
