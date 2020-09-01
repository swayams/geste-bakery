import * as React from 'react';
import { Grid } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { ui } from '../../constants/ui';

const Area = ({id, alt, children}) => {
    return <Grid container style={style(alt)} id={id} >
        {children}
    </Grid>
}


const style = ( alt: boolean ) : CSSProperties => {
    return {
        height: 'auto',
        backgroundColor: alt ? ui.scheme.backgroundAlt.toString() : ui.scheme.white,
        padding: '2em 0',
       
    }
}

export default Area