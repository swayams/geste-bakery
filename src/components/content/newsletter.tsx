import * as React from "react"
import { Paper, TextField, Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import "./content.scss"

const Newsletter = props => {
  return (
    <Paper className="newsletter">
      <h4>Subscribe to our Newsletter</h4>

      <Grid container direction="row" justify="center" className="newsletter-form">
        <Grid item xs={12} md={8}>
          <TextField id="newsletter-email-control" label="email" variant="outlined" fullWidth />
        </Grid>
        <Grid container xs={12} md={4} alignItems="center" justify="center" direction="row">
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Newsletter
