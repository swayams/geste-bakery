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
              Geste Crossiants <br></br>
              1234, John Doe Avenue,<br></br>
              Toronto ZX34234<br></br>
              Ph: 1234 1234 1234<br></br>
            </p>
            <SocialMediaButtons direction="row" />
          </Grid>

          <Grid item xs={12} className="static">
            2020 - All rights reserved | crafted with &#10084; by Swayam
          </Grid>
        </Grid>
      </footer>
    )
  }
}

export default Footer
