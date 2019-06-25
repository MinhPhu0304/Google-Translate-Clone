import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

function LoadingAnimation() {
  return (
    <Grid   direction='column'
            container
            alignItems='center'>
            
            <Grid   item>
                <CircularProgress color='primary' />
            </Grid>
    </Grid>
  )
}

export default LoadingAnimation;
