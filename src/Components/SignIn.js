import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const[call,setCall]=useState([])
  const formik= useFormik({
    initialValues:{
       
        email:'',
        password:'',
    },

    validationSchema:Yup.object({
       
        email:Yup.string().email("invalid Email Address").required("Required!"),
        password:Yup.string().required("Required!"),
       
    }),
    onSubmit: (values)=>{

         console.log(values)
          
    }
})

// fetch("http://localhost:3000/comments").then((res)=>
// {
//   res.json()
// }).then((Response)=>
// {
//   console.log(Response)
// })

// const response = await axios.get(
//   `https://jsonplaceholder.typicode.com/posts?_limit=10`
// );

// console.log(response)




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

     
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <HowToRegTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} 
          />
           {formik.touched.email && formik.errors.email ? <p style={{color:'red'}}>{formik.errors.email}</p> : null}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? <p style={{color:'red'}}>{formik.errors.password}</p> : null}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}