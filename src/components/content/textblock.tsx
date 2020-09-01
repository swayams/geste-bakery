import * as React from 'react';
import { Grid } from '@material-ui/core';
import { ui } from '../../constants/ui';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const SimpleTextBlock = (props) => {

    return (
        <Grid container >
            <div style={style}>
                {props.text}
            </div>
        </Grid>
    )
}

export default SimpleTextBlock

const style: CSSProperties = {
    padding: '1em 0',
    fontSize: '1.25em',
    width: '70%',
    margin: 'auto',
    color: ui.scheme.secondary,
    textAlign: 'center'
}