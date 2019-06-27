import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import accountCircle from '../../assets/icon/accountCircle.svg';
import fastfood from '../../assets/icon/fastfood.svg';
import { withStyles } from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import restaurant from '../../common/restaurant';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import restaurantData from '../../common/restaurant';
import { CardHeader, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Icons from '@material-ui/core/Icon';

import Star from '@material-ui/icons/Star';

import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';





//used this svg icon as a component not as a image as down for accountCircle icon in login button
const FastFoodIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
    width="35"
    height="35"
    viewBox="0 0 24 24" > < path fill="none"
        d="M0 0h24v24H0V0z" /> < path d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1zM15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM2.1 15h12.8c.62 0 1.11-.56.99-1.16-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16zM15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z" />
</svg>

)

const SearchIcon = (props) => (

    <svg xmlns="http://www.w3.org/2000/svg"
        className={props.class}
        fill={props.fill}
        width="24"
        height="24"
        viewBox="0 0 24 24" > < path fill="none"
            d="M0 0h24v24H0V0z" /> < path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
)
const styles = {
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
   
    bigAvatar: {
        margin: '2%',
        borderRadius: 0,
        maxWidth:'100%',
        maxHeight:'100%'
       
    },
    card: {
        maxHeight:'100%',
        maxWidth: '100%',
      },
      media: {
        height: 140,
      },
      gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer',

    },
    root: {
        width: '100%',
    }
    
     
};
class Header extends Component {
    render() {

        const { classes } = this.props;
        return (
            <div>

                <header className="app-header-container" >

                    <div className="fastfood-icon-container"
                        id="left" >
                        <FastFoodIcon fill="white" />
                    </div>

                    <div className="search-icon-container"
                        id="middle" >

                        <TextField InputProps={
                                {
                                    startAdornment: (<InputAdornment position="start" >
                                        <SearchIcon id="SearchIcon-id"
                                            fill="white"
                                            className="SearchIcon-logo" />
                                    </InputAdornment>
                                    ),
                                }
                            }
                            id="search-text-input"
                            placeholder="Search by Restaurant Name"
                            margin="normal"
                            fullWidth />
                    </div>





                    <div className="login-button-container"
                        id="right" >
                        <Button variant="contained"
                            color="default" >
                            <img src={accountCircle}
                                className="accountCircle-logo"
                                alt="accountCircle" />
                            Login </Button> </div >

                </header>


                <GridList cellHeight = { "auto" }
                className = { classes.gridListMain } cols={4} > {

                    restaurantData.map(restaurant => (

                        <GridListTile key={restaurant.id} >


                            <Grid container className = {classes.root} spacing={4}>
                              <Grid Item>
                                <Card className = "cardStyle">


                                <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image={restaurant.photo_URL}
                                
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {restaurant.restaurant_name}
                                  </Typography>
                                  
                                  <Typography variant="body2" color="textSecondary" component="p">
                                  <Star />{restaurant.customer_rating}({restaurant.number_customers_rated})
                                </Typography>
                                
                                 
                                </CardContent>
                              </CardActionArea>
                             

                                </Card>

                        </Grid>

                        </Grid>


                        </GridListTile >

                    ))
                }
                </GridList>
            </div>

        )
    }
}

export default withStyles(styles)(Header);