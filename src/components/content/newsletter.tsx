import * as React from "react"
import { Paper, TextField, Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import "./content.scss"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { Parallax, ParallaxBanner } from "react-scroll-parallax"


const ParallaxImage = () => (
  <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
    <img src="https://i.ibb.co/RjPWC1p/c-bread-factory.jpg" />
  </Parallax>
)

const Newsletter = props => {
  return (
    <Paper className="newsletter">
      <h4>Subscribe to our Newsletter</h4>

      <Grid
        container
        direction="row"
        justify="center"
        className="newsletter-form"
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="newsletter-email-control"
            label="email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3} style={style}>
          <Button variant="contained" color="primary" className="email-btn">
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const style: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const NewsLetterBlock = props => {
  return (
    //

    <ParallaxBanner
      className="newsletter-block"
      layers={[
        {
          image: "https://i.ibb.co/RjPWC1p/c-bread-factory.jpg",
          amount: 0.5,
        }
      ]}
      style={{
        height: "100vh",
      }}
    >
      <Newsletter />
    </ParallaxBanner>
  )
}

export default NewsLetterBlock

export {Newsletter}
