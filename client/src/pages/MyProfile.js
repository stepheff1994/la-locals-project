
import { useQuery } from '@apollo/react-hooks'

import { QUERY_ME} from '../utils/queries'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import sample from '../images/sample.JPG'
import FavoriteIcon from "@material-ui/icons/Favorite";
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles({
  root: {
    maxWidth: "345",
    width: "70vh",
    padding: "20px",
    margin: "6rem auto",
    textEmphasisColor: "white",
    backgroundAttachment: "none",
    border: "10px solid #f9f9f9",
    height: "70vh"
  },
  media: {
    height: 250,
  },

});

 function MyProfile() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(QUERY_ME)

    const firstname = data?.me.firstName;
    const age = data?.me.age;
    const pref = data?.me.preference
    const area = data?.me.area

   
    

    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h3" style={{color:"blue", fontWeight:"bolder"}} component="h2" >
          {firstname}
        </Typography>
        <Typography variant="body2" style={{color:"red", fontWeight:"bold",fontSize: "15px"}}  component="p">
         Age:  {age}
        </Typography>
        <Typography variant="body2"  style={{color:"red", fontWeight:"bold", fontSize: "15px"}}  component="p">
         Preference: Looking for {pref}
        </Typography>
        <Typography variant="body2"  style={{color:"red", fontWeight:"bold", fontSize: "15px"}}  component="p">
         Area: {area}
        </Typography>
        <Divider component="li" />
      </CardContent>

      <CardMedia
          className={classes.media}
          image = {sample}
          
        />
      
      <CardActions disableSpacing>
      <Button variant="contained" color="secondary">
       UPDATE PROFILE
      </Button>
       
       
      </CardActions>
    </Card>
  );
}

export default MyProfile


