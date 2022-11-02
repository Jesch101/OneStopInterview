import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/logo.svg';
import { borderRadius } from '@mui/system';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://onestopinterview.com/">
        OneStopInterview.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const darkTheme = createTheme({
   palette: {
   mode: "dark",
   },
});

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
         <CssBaseline />
         <Grid
            sm={4}
            md={7}
            sx={{
               backgroundImage: `url(${logo})`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
            }}
            marginBottom='120px'
         />
         <Grid 
            item xs={12} sm={8} md={5} elevation={6} square>
            <Box
               sx={{ my: 8, mx: 4, display: 'flex', 
                  flexDirection: 'column', alignItems: 'center', }}
            >
               <Avatar sx={{ m: 1, bgcolor: 'rgba(51,102,204)' }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign in
               </Typography>
               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email"
                     name="email"
                     autoComplete="email"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
                  <Grid item align="right">
                     <Link href="#" variant="body2" >
                        Forgot password?
                     </Link>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 5, bgcolor: 'rgba(51,102,204)', borderRadius: '12px', }}
                     >
                        Sign In
                     </Button>
                  </Grid>
                  <Grid item>
                     <Typography variant="body2" color="text.secondary" align="center">
                        Have no account yet?
                     </Typography>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2, backgroundColor: 'transparent', 
                           color: 'white', border: '1px solid white', borderRadius: '12px', }}
                     >
                        Registration
                     </Button>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
               </Box>
            </Box>
         </Grid>
      </Grid>
   </ThemeProvider>
  );
}