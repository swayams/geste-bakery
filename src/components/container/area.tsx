import * as React from 'react';
import { Grid } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const Area = ({id, alt, children}) => {
    return <Grid container style={style(alt)} id={id} >
        {children}
    </Grid>
}

const style = ( alt: boolean ) : CSSProperties => {
    return {
        height: '100vh',
        backgroundColor: (alt === true) ? '#ccc' : 'transparent'
    }
}

export default Area