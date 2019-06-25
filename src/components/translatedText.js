import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import TextField        from '@material-ui/core/TextField'

const styles = {
    root:{

    }
}

function TranslatedTextField(props){

    return(
        <div>
            <TextField
            id="outlined-read-only-input"
            label={props.translatedText[0] === undefined? "Translated Text" : ''}
            value={props.translatedText[0]}
            fullWidth
            multiline
            InputProps={{
                readOnly: true,
                
            }}
            variant="outlined"
            />


        </div>
    );
}

TranslatedTextField.propTypes ={
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TranslatedTextField);
