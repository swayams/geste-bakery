import * as React from "react"
import { Grid, Paper, Divider, Hidden } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { ui } from "./../../constants/ui"

import "./footer.scss"
import SocialMediaButtons from "../plugins/share"
import { Newsletter } from "../content/newsletter"

export interface IFooterProps {}

export interface IFooterState {}

class Footer extends React.Component<IFooterProps, IFooterState> {
  constructor(props: IFooterProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <footer>
        <Grid container className="footer">
          <Grid item xs={6} lg={3} className="logo">
            <img
              src="https://i.ibb.co/LrQsJf6/Geste-Croissanterie-Final-logo-white-round-removebg-preview-1.png"
              alt="1"
            ></img>
          </Grid>

          <Hidden smDown>
            <Grid item xs={12} lg={6} className="newsletter-part">
              <Newsletter />
            </Grid>
          </Hidden>

          <Grid item xs={6} lg={3} className="address">
            <p>
              Geste Croissanterie <br></br>
              1183, Dundas street W,<br></br>
              Toronto, ON, M6J 1X3<br></br>
              <a href="tel:+1 (416) 538-1710">1 (416) 538-1710</a><br></br>
            </p>
            <SocialMediaButtons direction="row" />
          </Grid>

          <Grid item xs={12} className="static">
            2020 - All rights reserved | crafted with &#10084; at <a href="https://theochreconcept.co.uk" target="_blank" class="studio"> Ochre </a> 
          </Grid>
        </Grid>
      </footer>
    )
  }
}

export default Footer
