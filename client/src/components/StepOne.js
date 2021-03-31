import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import {Typography, 
        Button, Grid, 
        Checkbox, TextField,
        OutlinedInput, FormControl,
        InputLabel, InputAdornment,
        IconButton} from '@material-ui/core';
import Visibility from "@material-ui/icons/Visibility";
import  VisibilityOff from "@material-ui/icons/VisibilityOff";  
import  SendSharpIcon from "@material-ui/icons/SendSharp";  

const useStyles = makeStyles ({
    mainContainer: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },

    formContainer: {
       position: "relative",
       width: "28.125rem",
       height: "auto",
       padding: "2rem"
    },

    btn: {
        width:"100%",
        height: "3rem",
        background: "red",
        color: "#fff"
    }
})
    

const StepOne = () => {
    const [showPasswordValue, setShowPasswordValue] = useState({
        showPassword: false
    });

    const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
        showConfirmPassword: false
    });

    const handleClickShowPassword =() =>{
        setShowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        })
    }

    const handleClickShowConfirmPassword =() =>{
        setShowConfirmPasswordValue({
            showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
        })
    }

    const classes = useStyles();
    return (
        <div className = {classes.mainContainer}>
            <Typography
            variant="h5"
            style = {{color: "#999", textAlign:"center" }}
            >
            SignUp
            </Typography>
            <div className={classes.formContainer}>
            <form >
              <TextField style= {{width:"100%", margin: "1rem 0"}}
              label ="FirstName" 
              variant="outlined"
              /> 

             <TextField style= {{width:"100%", marginBottom: "1rem"}}
              label ="LastName" 
              variant="outlined"
              /> 

               <TextField style= {{width:"100%", marginBottom: "1rem"}}
              label ="Email" 
              variant="outlined"
              />  

               <FormControl style= {{width:"100%", marginBottom: "1rem"}} variant="outlined" >
                  <InputLabel>Password</InputLabel>
                 <OutlinedInput
                 labelWidth={70}
                 type={showPasswordValue.showPassword ? "text" : "password"}
                 endAdornment={
                     <InputAdornment position ="end">
                     
                     <IconButton edge="end"
                        onClick={handleClickShowPassword} >
                        {showPasswordValue.showPassword ? <Visibility/> : <VisibilityOff/> }
                     </IconButton>
                     </InputAdornment>
                 }
                 
                 /> 
              </FormControl> 
              <FormControl style= {{width:"100%", marginBottom: "1rem"}} variant="outlined" >
                  <InputLabel>Confirm Password</InputLabel>
                 <OutlinedInput
                 labelWidth={135}
                 type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"}
                 endAdornment={
                     <InputAdornment position ="end">
                     
                     <IconButton edge="end"
                        onClick={handleClickShowConfirmPassword} >
                        {showConfirmPasswordValue.showConfirmPassword ? <Visibility/> : <VisibilityOff/> }
                     </IconButton>
                     </InputAdornment>
                 }
                 /> 
              </FormControl>
              <>
                 <Button className={classes.btn}
                 variant="contained" type="submit" endIcon={<SendSharpIcon/>}>
                 SiGN UP
                 </Button>
              </>
            </form>  
            </div>  
        </div>
    )
}

export default StepOne
