import * as React from "react"
import { Grid, Paper, Divider } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { ui } from "./../../constants/ui"

import './footer.scss'

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
        <Grid container  className="footer">
       
          <Grid item xs={6} lg={3} >
            <img src="https://i.ibb.co/LrQsJf6/Geste-Croissanterie-Final-logo-white-round-removebg-preview-1.png" alt="1"></img>
          </Grid>
        </Grid>
      </footer>
    )
  }
}

export default Footer
