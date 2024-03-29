
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Cookies from "js-cookies";

//hello
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        KnowWhere
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const userId = uuidv4();

export default function SignIn() {

  
  const [userName, setUN] = useState("");
  const [pass, setPass] = useState("");
  // const { SERVER_URL } = useOutletContext();
  const SERVER_URL="http://localhost:7000"




   const handleSubmit = async (event) => {
    event.preventDefault();
  

    
  
    const logData = {
      name: userName,
      password: pass,
      userId:userId
    };
    try {
      await axios.post(SERVER_URL+"/users",logData).then(res=>{
       let resData = res.data
        console.log(resData)
        Cookies.setItem("userId", logData.userId);
        setUN(prevun=>"success");
      })
      console.log("emitted logdata");
      
    } catch (error) {
      console.log(error);
      setUN(prevun=>"error");
    }
   
    setPass(prevpass=>"");

   
  };
  function handleInputE(event) {
    
    setUN(event.currentTarget.value);
    
   
  
  }
  function handleInputP(event) {
 
    setPass(event.currentTarget.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              autoFocus
              value={userName}
              onChange={handleInputE}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              value={pass}
              onChange={handleInputP}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            
           
              
              <Link href="/" variant="body2">
            <Button
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                login
            </Button>
                </Link>
             

              
          
          </Box>
        </Box>
     
      </Container>
    </ThemeProvider>
  );
}
