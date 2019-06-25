import React from 'react';
import Proptypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Icon from '../static/image/pageIcon.png';

const styles = {

    directoryLink:{
        flex:1
    },
    pageIcon:{
        borderRadius:0,
        height: '4%',
        width:'4%',
        display: 'flex'
    },
    link:{
        color:'white',
        fontSize:23
    },  
    AppBarStyle:{
        display:'flex'
    },
};

const LinkComponentToContact = (props) => <Link  component={RouterLink} underline='none' to='/Contact'  {...props}    />
const LinkComponentToHomePage = props => <Link  component={RouterLink} underline='none' to='/'   {...props}  />

function DesktopMenu(props) {
    
    const { classes } = props;

    return(
            <AppBar position='relative' className={classes.AppBarStyle}>
                <Toolbar>             
                    <Typography className={classes.directoryLink} variant="h6" >
                        <Grid   container
                                spacing={16} 
                                justify='flex-start'
                                direction='row'
                                alignItems='center'>
                            
                            <Avatar src={Icon}
                                    alt="Google Translate Icon" 
                                    className={classes.pageIcon}/>   

                            <Grid   item>
                                <Button component={LinkComponentToHomePage} className={classes.link}>
                                    Google Transalte
                                </Button>
                            </Grid>

                            <Grid   item>
                                <Button component={LinkComponentToContact}  className={classes.link}>
                                    Contact
                                </Button>
                            </Grid>
                        </Grid>
                    </Typography>
        
                    <Typography >
                        <Link component={RouterLink} to="/login">
                            <Button color='inherit' style={{color:'white'}} >Login</Button>
                        </Link>
                    </Typography>

                </Toolbar>

            </AppBar>
    )
};

DesktopMenu.propTypes ={
    classes: Proptypes.object.isRequired,
}

export default withStyles(styles)(DesktopMenu);