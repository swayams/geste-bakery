import * as React from "react"
import { Grid, Paper, Divider } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { ui } from "./../../constants/ui"

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
        <Grid container style={footer} className="footer">
          <Grid container direction="row" className="static">
            <Grid item xs={3}>
              Lorem
            </Grid>
            <Grid item xs={6}>
              {" "}
              Copyright 2020. All rights reserved.{" "}
            </Grid>
            <Grid item xs={3}>
              {" "}
              Ipsum{" "}
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="row">
            <Grid item xs={3}>
              Lorem
            </Grid>
            <Grid item xs={6}>
              {" "}
              Copyright 2020. All rights reserved.{" "}
            </Grid>
            <Grid item xs={3}>
              {" "}
              Ipsum{" "}
            </Grid>
          </Grid>
        </Grid>
      </footer>
    )
  }
}

export default Footer

const footer: CSSProperties = {
  textAlign: "center",
  borderTop: `1px solid ${ui.footer.background.border}`,
  background: ui.footer.background.color,
  color: ui.footer.color,
    
  padding: "10px",
}
