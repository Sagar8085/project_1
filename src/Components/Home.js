import React, {  useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import { setProduct , removeSelectedProduct} from './Action/Products';
import { Link } from 'react-router-dom';
import CircularStatic from './Loader'



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  center:{
    display:'flex',
    justifyContent:'center',
    alignItemsL:'center'
  }
}));



// function Copyright() {
  
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



const theme = createTheme();

export default function Home() {
  const classes = useStyles();

  const [item,setItem]=useState([])
  const [loader,setLoader]=useState(false)
  const products= useSelector((state)=>state);
  const dispatch= useDispatch()
  const fetchProducts= async ()=>{
     setLoader(true)
      const response = await axios.get("https://fakestoreapi.com/products")
                      .catch((err)=>
                      {
                          console.log(err)
                      })
                      
                      // console.log(response);
                    
                      dispatch(setProduct(response.data))
                      setLoader(false)

  };
  React.useEffect(()=>{
   fetchProducts() 
     return ()=>
     {
       dispatch(removeSelectedProduct())
     }
  },[])


//  function name()
// {
//    fetch("https://fakestoreapi.com/products").then((e)=>{
//     return e.json().then((p)=>{
//         console.log(p);
//     })
//   })
//   let res=await mohit.json()
//   console.log(res);
// } 

 if (loader) {
   return <>
       <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
       <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh', width:'vw'}}>
       <CircularStatic  />
       </div>
       </div>
   </>
 }
  const Data= products.allProducts.products

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='container my-5 py-5'>

      <div className='row justify-contenet-center'>
      <caption><h3>Using Redux</h3></caption>

  {Data.map((product) => {
    return (
        <>

          <div className='col-md-3 mb-4'>
              <div className="card h-100 text-center p-4 key{product.id} ">
                <Link to={`productView/${product.id}`}>
                  <img src={product.image} className="card-img-top" alt={product.title} height="220px" />
                      <div className="card-body">
                          <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                          <p className="card-text lead fw-bold">₹{product.price}</p>
                          {/* <Link to={`/preview/${product.id}`} ></Link>< button className="btn btn-outline-dark">Buy Now</a> */}
                          
                      </div>
                  </Link>
              </div>
          </div>
      </>
  )
})}

</div>
</div>

   </ThemeProvider>
   
  );
}