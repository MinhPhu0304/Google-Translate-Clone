import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import lighblue from '@material-ui/core/colors/lightBlue';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({

    card:{
        backgroundColor: lighblue['A100'],
        minWidth:'30%'
    },
    cardHeader:{
        textAlign: 'center',
        
    },
    formMargin:{
        marginTop:'10px',
    },
    cardAction:{
        justifyContent:'center'
    },
    submitButton:{
        background: 'linear-gradient(to bottom, #00ffff 0%, #0000ff 100%)',
    }
})

function LoginCard(props) {

    const { classes, cardTitle } = props;

    return (
        <div>
            <Card className={classes.card}> 

                <CardHeader title={cardTitle} 
                            classes={{
                                root:classes.cardHeader
                            }}/>

            <CardContent>

                <FormControl    fullWidth   className={classes.formMargin}>
                    <TextField  id="outlined-start-adornment"
                                label="Username" 
                                variant="filled"
                                mx="auto"
                                onChange={props.onChangeUsername}
                    />
                </FormControl>
                
            

                <FormControl    fullWidth   className={classes.formMargin}>
                    <TextField  id="outlined-adornment-password"
                                type="password"
                                variant="filled"
                                label="Password"
                                onChange={props.onChangePassword}
                    />        
                </FormControl>

            </CardContent>

            <CardActions    classes={{
                                root:classes.cardAction,
                            }}
            >
                <Button justify='Center'
                        size="small"
                        onClick={props.onClickSubmit}
                        className={classes.submitButton}>
                    Submit
                </Button>

            </CardActions>
            </Card>
        </div>
    )
}

export default withStyles(styles)(LoginCard);
