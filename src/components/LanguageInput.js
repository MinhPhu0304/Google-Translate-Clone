import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import OutLinedInput from '@material-ui/core/OutlinedInput'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

import LoadingAnimation from './LoadingAnimation'

const styles = theme => ({
    root:{
        flex:1
    },
    button:{
        justifyContent:'center'
    },
    languageListForm:{
        margin: '10px'
    }
})

function LanguageInputField(props){

    const { classes } = props;


    return(
        <div>
            <Grid   container
                    direction="column"
                    justify="space-between">
                
                <Grid   item>
                    <FormControl    fullWidth>
                        <TextField  label="Enter word to translate here"
                                    placeholder="Enter word here"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={props.onTextToTranslateChange} />
                    </FormControl>
                </Grid>

                <Grid   item>
                    <Grid   container
                            alignItems='center'
                            justify='center'>

                        <Grid   item>
                            <FormControl    className={classes.languageListForm}>
                                <InputLabel htmlFor="ChooseLanguage">Translate to</InputLabel>

                                <Select native
                                        value = {props.chosenLanguage}
                                        onChange = {props.handleChangeLanguage}
                                        input={
                                            <OutLinedInput  name="Language"
                                                            labelWidth={7}
                                                            id="ChooseLanguage"/>
                                        }>

                                    <option value="" />
                                    {props.languageList.map((element,index) =>{
                                        return <option value={element} key={index}>{element}</option>
                                    })}

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <Button color='primary'
                                    
                                    variant='contained'
                                    className={classes.button}
                                    
                                    onClick={props.onClickTranslate}>
                                Translate this
                            </Button>
                        </Grid>
                    </Grid>

                    {props.WaitForTranstlate ? <LoadingAnimation />: <p></p>}
                </Grid>

            </Grid>
        </div>
    )
}

LanguageInputField.propTypes ={
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LanguageInputField);