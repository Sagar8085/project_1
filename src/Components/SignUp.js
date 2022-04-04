import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [data,setData]=useState({ firstName:'',
  lastName:'',
  email:'',
  contact:'',
  password:'',
  confirm_password:''})


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik= useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:'',
        contact:'',
        password:'',
        confirm_password:''
    },

    validationSchema:Yup.object({
        firstName:Yup.string().required("Required!"),
        lastName:Yup.string().required("Required!"),
        contact:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required!"),
        email:Yup.string().email("invalid Email Address").required("Required!"),
        password:Yup.string().required("Required!"),
        confirm_password:Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required("Required!")
    }),
    onSubmit: async (values)=>{

      
        await fetch('http://localhost:3000/comments',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)
            
        }
        )
        Swal.fire(
          'Registration Successful ',
          'You clicked the button!',
          'success'
        )
        }
       
      
       
    // }
})


async function Data(){

  let res=await fetch('http://localhost:3000/comments')
  let response = await res.json()
  setData(response)
}


useEffect(()=>
{
  Data()
},[])








    return (<>

<div width="100vw" className="row">
   <caption><h3>Validation From Formik and yup </h3></caption>

   </div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
              <TextField variant="outlined" onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange} required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="fname"/>
              {formik.touched.firstName && formik.errors.firstName ? <p style={{color:'red'}}>{formik.errors.firstName}</p> : null}
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange} required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname"/>
              {formik.touched.lastName && formik.errors.lastName ? <p style={{color:'red'}}>{formik.errors.lastName}</p> : null}
            </Grid>


            <Grid item xs={12}>
              <TextField variant="outlined" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} required fullWidth id="email" label="Email Address" name="email" autoComplete="email"  />
              {formik.touched.email && formik.errors.email ? <p style={{color:'red'}}>{formik.errors.email}</p> : null}
            </Grid>


            <Grid item xs={12}>
              <TextField variant="outlined" onBlur={formik.handleBlur} value={formik.values.contact} onChange={formik.handleChange} required fullWidth id="contact" label="Contact number" name="contact" autoComplete="contact"  />
              {formik.touched.contact && formik.errors.contact ? <p style={{color:'red'}}>{formik.errors.contact}</p> : null}
            </Grid>


            <Grid item xs={12}>
              <TextField variant="outlined" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
              {formik.touched.password && formik.errors.password ? <p style={{color:'red'}}>{formik.errors.password}</p> : null}
            </Grid>

            
            <Grid item xs={12}>
              <TextField variant="outlined" onBlur={formik.handleBlur} value={formik.values.confirm_password} onChange={formik.handleChange} required fullWidth name="confirm_password" label="Confirm Password" type="password" id="confirmpassword" autoComplete="off" />
              {formik.touched.confirm_password && formik.errors.confirm_password ? <p style={{color:'red'}}>{formik.errors.confirm_password}</p> : null}
            </Grid>


        </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
              
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
 </> );
}