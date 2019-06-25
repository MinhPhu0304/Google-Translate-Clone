import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

import LoginCard from './LoginCard';
import SignUpCard from './SignUpCard';

const styles = theme =>({
    root:{
    
    },
    TabHeader:{
        backgroundColor:'#1a237e',
        color:'white',
    }
});

function CenterLoginCard(props) {

    const { classes } = props;

    console.log(props.classes.TabHeader)
    return(
        <div>
            <Grid   container
                    style={{marginTop: '20px'}}
                    justify = "center">
                <Paper
                        >
                    <Tabs   centered
                            className={classes.TabHeader}
                            value={props.value}
                            onChange={props.onChangeTab}>
                        <Tab    label="LogIN"></Tab>
                        <Tab    label="Sign IN"></Tab>
                    </Tabs>

                    { props.value === 0 && <LoginCard    onChangePassword={props.onChangePassword}
                                                        cardTitle="Log In"
                                                        onChangeUsername={props.onChangeUsername}
                                                        onClickSubmit={props.onClickSubmit}/>
                    }
                    { props.value === 1 && <SignUpCard   onChangePassword={props.onChangePassword}
                                                        cardTitle="Sign Up"
                                                        onChangeUsername={props.onChangeUsername}
                                                        onClickSubmit={props.onClickSubmit}/>}
                </Paper>

            </Grid>
        </div>
    )
}

CenterLoginCard.propTypes ={
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CenterLoginCard);