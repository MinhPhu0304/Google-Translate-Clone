import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    list: {
        width: 250,
      },
    fullList: {
        width: 'auto',
      },
};

class MobileMenu extends React.Component{

    state = {
        openDrawer: false,
    }

    handleOpenDrawer = ()=>{
        this.setState({openDrawer :true})
    }

    handleCloseDrawer = ()=>{
        this.setState({openDrawer :false})
    }

    // only the home url that needs to convert the rest only needs to remove the slash
    converPathtToLink = (path) =>{
        if( path === '/'){ {/** if the path is slash only it means that is the main page */}
            return "Home";
        } else {
            return path.replace("/","");
        }
    }

    render(){

        const { classes} = this.props;
        const fullList = (
            <div    className={classes.fullList}>
                <List>
                    {
                        ['/','/contact','/login'].map((value,index)=>(
                            <ListItem   button  key={index}>
                                <Link   underline='none'
                                        component={RouterLink}
                                        to={value}>
                                    <ListItemText primary={this.converPathtToLink(value)}></ListItemText>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        );

        return(
            <div>
                    <AppBar position="static">
                        <Toolbar>   
                                       
                            <IconButton color="inherit" aria-label="Menu" onClick={this.handleOpenDrawer}>
                                <MenuIcon />
                            </IconButton>
                            
                            <Typography variant="h6" color="inherit" style={{flex:1}}>
                                <Link component={RouterLink} to="/"  style={{color:'white'}}    underline='none'>
                                        Google Translate
                                </Link>                           
                            </Typography>
                
                            <div>
                            <Typography >
                                <Link component={RouterLink} to="/login" underline='none'>
                                    <Button color='inherit' style={{color:'white'}} >Login</Button>
                                </Link>
                            </Typography>
                            </div>
                        </Toolbar>
                    </AppBar>
                    
                <Drawer anchor="top"    
                        open={this.state.openDrawer}
                        onClose={this.handleCloseDrawer}>
                        <div    tabIndex={0}
                                role='button'
                                onClick={this.handleCloseDrawer}
                                onKeyDown={this.handleCloseDrawer}>
                            {fullList}
                        </div>
                </Drawer>

            </div>
        );
    }
}

MobileMenu.propTypes ={
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MobileMenu);