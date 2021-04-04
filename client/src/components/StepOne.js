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
import useForm from './useForm';


const useStyles = makeStyles ({
    mainContainer: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },

    formContainer: {
       position: "relative",
       width: "auto",
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
//define state schema

const stateSchema = {
    firstname: {value:"", error:""},
    lastname: {value:"", error:""},
    email: {value:"", error:""},
    password: {value:"", error:""},
    confirmPassword: {value:"", error:""},
}

const stateValidatorSchema = {
    firstname: {
        required: true,
        validator: {
            func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
            error: "Please enter First Name"
        }
    },

    lastname: {
        required: true,
        validator: {
            func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
            error: "Please enter Last Name"
        }
    },

    email: {
        required: true,
        validator: {
            error: "Invalid Email"
        }
    },

    password: {
        required: true,
        validator: {
            func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
            error: "Minimum 6 characters abd at least one special character '@,$,!,%,#,?,&"
        }
    }
}

 const {values, errors, dirty, handleOnChange} = useForm (stateSchema, stateValidatorSchema)

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

     const {firstname, lastname, email, password, confirmPassword }=values;

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
              name = "firstname"
              value={firstname}
              onChange = {handleOnChange}
              /> 
             {errors.firstname && dirty.firstname && (
                <Typography
                    style = {{marginTop: "0",color: "red", fontWeight: "200"  }}
                >{errors.firstname}
                 </Typography>
            )} 
             <TextField style= {{width:"100%", marginBottom: "1rem"}}
              label ="LastName" 
              variant="outlined"
              name ="lastname"
              value={lastname}
              onChange = {handleOnChange}
              /> 
              {errors.lastname && dirty.lastname && (
                <Typography
                    style = {{marginTop: "0",color: "red", fontWeight: "200"  }}
                >{errors.lastname}
                 </Typography>
              )}
               <TextField style= {{width:"100%", marginBottom: "1rem"}}
              label ="Email" 
              variant="outlined"
              name = "email"
              value = {email}
              onChange = {handleOnChange}
              /> 
              {errors.email && dirty.email && (
                <Typography
                    style = {{marginTop: "0",color: "red", fontWeight: "200"  }}
                >{errors.email}
                 </Typography>
              )} 
              
               <FormControl style= {{width:"100%", marginBottom: "1rem"}} variant="outlined" >
                  <InputLabel>Password</InputLabel>
                 <OutlinedInput
                 labelWidth={70}
                 name = "password"
                 value = {password}
                 onChange = {handleOnChange}
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
                {errors.password && dirty.email && (
                <Typography
                    style = {{marginTop: "0",color: "red", fontWeight: "200"  }}
                >{errors.password}
                 </Typography>
              )}  
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
