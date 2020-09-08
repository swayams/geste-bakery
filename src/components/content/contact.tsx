import * as React from "react"
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core"
import { ParallaxBanner } from "react-scroll-parallax"
import { TextField } from "@material-ui/core"
import axios from "axios";

const handleOnSubmit = e => {
  e.preventDefault();
  const form = e.target;
  axios({
    method: "post",
    url: "https://getform.io/f/d3eb9291-0b7d-4f1c-92e4-f5b76e8c15ee",
    data: new FormData(form)
  })
    .then(r => {
     console.log("success sent massate")
    })
    .catch(r => {
      console.log("failure")
    });
};

const Contact = props => {
  return (
    <form action="https://getform.io/f/d3eb9291-0b7d-4f1c-92e4-f5b76e8c15ee" method="POST">
      <Grid container className="contact" justify="flex-start">
        <Grid item xs={12} className="control">
          <h4> Contact us for Orders</h4>
        </Grid>
        <Grid item xs={12} lg={6} className="control">
          <TextField
            fullWidth
            id="name"
            label="Name"
            defaultValue=""
            helperText="What do we label the takeaway?"
            variant="outlined"
            name="name"
          />
        </Grid>
        <Grid item xs={12} lg={6} className="control">
          <TextField
            fullWidth
            id="email"
            label="E-mail Address"
            defaultValue=""
            helperText="We'll never share your email"
            variant="outlined"
            name="email"
          />
        </Grid>
        <Grid item xs={12} className="control notes">
          <TextField
            fullWidth
            id="notes"
            label="Notes"
            defaultValue=""
            helperText="Let us know your preferences or special requests. We'll try our best to accomodate any special request"
            variant="outlined"
            rows={3}
            multiline
            rowsMax={4}
            name="message"
          />
        </Grid>

        <Grid container direction="row-reverse" spacing={3}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              className="send-btn"
              fullWidth
              type="submit"
              onClick={(e: any) => handleOnSubmit(e)}
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              className="error-btn"
              fullWidth
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

const ContactForm = props => {
  return (
    <ParallaxBanner
      className="contact-block"
      layers={[
        {
          image: "https://i.ibb.co/RjPWC1p/c-bread-factory.jpg",
          amount: 0.3,
        },
      ]}
      style={{
        height: "130vh",
        minHeight: "800px",
      }}
    >
      <Contact />
    </ParallaxBanner>
  )
}
export default ContactForm
