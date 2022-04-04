import React ,{useEffect, useState}from 'react';
import Button from '@material-ui/core/Button';
import {useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import Avatar from '@material-ui/core/Avatar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';







const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    paddingTop: '56.25%', // 16:9
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
    alignItems:'center'
  }
}));







export default function Product_View() {
  const classes = useStyles();
  
  const [first, setfirst] = useState({})
  const products= useSelector((state)=>state);
  const dispatch= useDispatch()
  let {id}=useParams();
  console.log(id);
  const fetchProducts= async ()=>{
  
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                      .catch((err)=>
                      {
                          console.log(err)
                      })
                      
                      setfirst(response.data);
                    
                     
  };
  React.useEffect(()=>{
      fetchProducts()
  },[])
  console.log(first)
 
  const Data= products.allProducts.products

  return (
    // <React.Fragment>
    //   <CssBaseline />
      
    //   <main>
    //     {/* Hero unit */}
    //     <div className={classes.heroContent}>
          
    //     </div>
    //     <Container className={classes.cardGrid} maxWidth="md">
    //       {/* End hero unit */}
    //       <Grid container spacing={4}>
          
    //           <Grid item key="" xs={12} sm={6} md={4}>
    //             <Card className={classes.card}>
    //               <CardMedia
    //                 className={classes.cardMedia}
    //                 image={first.image}
                    
    //               />
    //               <CardContent className={classes.cardContent}>
    //                 <Typography gutterBottom variant="h5" component="h2">
    //                 {first.id}
    //                 </Typography>
    //                 <Typography>
    //                   {first.title}
    //                 </Typography>
    //               </CardContent>
    //               <CardActions>
    //                 <Button size="small" color="primary">
    //                   View
    //                 </Button>
    //                 <Button size="small" color="primary">
    //                   Edit
    //                 </Button>
    //               </CardActions>
    //             </Card>
    //           </Grid>
 
    //       </Grid>
    //     </Container>
    //   </main>
    //   {/* Footer */}
    
    //   {/* End footer */}
    // </React.Fragment>


    <div className={classes.root}>
    <Grid container spacing={3}>
      
      <Grid className={classes.center} item xs={6}>
      <Avatar variant="rounded"  style={{width: "70%", height: "80%", objectFit: 'contain' , marginTop:'50px'}}  src={first.image} />

      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>

        <Card className={classes.center}  style={{height:'100vh'}}>
                   
                  <CardContent className={classes.cardContent} style={{width: "70%", height: "80%", objectFit: 'contain' , marginTop:'40%'}} >
                    <Typography style={{color:'#34495e'}} gutterBottom variant="h3" component="h2">
                    {first.title}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="h2">
                     <h4>Price <CurrencyRupeeIcon/> {first.price}</h4>  
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    {first.description}
                    </Typography>
                    <Typography >
                    <h3 style={{color:'#7f8c8d'}}>{first.category}</h3>
                    </Typography>
                    <Button variant='contained' fullWidth color='primary'>Add To Cart</Button>
                  </CardContent>
                  
        </Card>


        </Paper>
      </Grid>
      
    </Grid>
  </div>





  );
}