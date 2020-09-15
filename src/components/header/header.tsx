import * as React from "react"
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  ListItemText,
  Divider,
  Hidden,
  Grid,
  Link,
} from "@material-ui/core"
import { ILink } from "./nav"

import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import HomeIcon from "@material-ui/icons/Home"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"
import WorkIcon from "@material-ui/icons/Work"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import MenuIcon from "@material-ui/icons/Menu"

import "./header.scss"
import { useStaticQuery, graphql } from "gatsby"
import { ui } from "../../constants/ui"

const query = graphql`
  query LogoQuery {
    file(name: { eq: "icon-main" }) {
      childCloudinaryAsset {
        fluid {
          src
        }
      }
    }
  }
`

const Header = () => {
  const src = useStaticQuery(query).file.childCloudinaryAsset.fluid.src

  return (
    <AppBar position="sticky" style={style}>
      <Toolbar>
        <Hidden mdUp>
          <Grid container direction={"row"}>
           
           
            <Grid item xs={6} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
              <img src={src} alt="main logo" style={{float: "left", margin: '5px auto', width: '70%' }} />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
              <TemporaryDrawer style={style.icon} />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid container direction="row" className="nav">
            <Grid item xs={2}>
              <Link className="link"> Our Story </Link>
            </Grid>
            <Grid item xs={2}>
              <Link className="link"> Creations </Link>
            </Grid>
            <Grid item xs={4}>
              <Link className="title">
                <img src={src} alt="Geste-Croissanterie-Final-logo" border={0} style={{margin: 0}}/>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link className="link"> Find Us </Link>
            </Grid>
            <Grid item xs={2}>
              <Link className="link"> Order </Link>
            </Grid>
          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Header

const alignTextCenter = {
  textAlign: "center",
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

type Anchor = "top" | "left" | "bottom" | "right"

const TemporaryDrawer = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor: Anchor) => (
    <div
      className={clsx(
        classes.list,
        {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        },
        "mobile-nav"
      )}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map(link => (
          <ListItem button key={link.name} alignItems="center">
            {headerNavigationButton.showIcon ? link.icon : null}
            <ListItemText primary={link.name} style={style.listItemTextStyle} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  const links = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Our Story", icon: <SupervisedUserCircleIcon /> },
    { name: "Creations", icon: <WorkIcon /> },
    { name: "Find Us", icon: <ContactMailIcon /> },
    { name: "Order", icon: <ContactMailIcon /> },
  ]

  const headerNavigationButton = { orientation: "top", showIcon: false }

  return (
    <div>
      {([headerNavigationButton.orientation] as Anchor[]).map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

const style = {
  color: ui.header.color,
  backgroundColor: ui.header.background.color,
  opacity: 1,
  listItemTextStyle: {
    padding: "5px 15px",
  },
  icon: {
    background: "#fff",
    color: "#000",
  },
}
