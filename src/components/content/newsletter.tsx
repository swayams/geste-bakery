import * as React from "react"
import { Paper, TextField, Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import "./content.scss"
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const Newsletter = props => {
  return (
    <Paper className="newsletter">
      <h4>Subscribe to our Newsletter</h4>

      <Grid container direction="row" justify="center" className="newsletter-form">
        <Grid item xs={12} md={8}>
          <TextField id="newsletter-email-control" label="email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={4} style={style}>
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const style: CSSProperties= {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Newsletter
