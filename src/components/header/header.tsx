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
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { ui } from "./../../constants/ui"

import "./header.scss"
import images from '../../constants/images';

export interface IHeaderProps {
  siteTitle: string
  siteLogo: string
  links: ILink[]
}

export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <AppBar position="sticky" style={style}>
        <Toolbar>
          <Hidden mdUp>
            <Grid item xs={3}>
              <TemporaryDrawer style={style.icon} />
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
                 <img src={images.hLogo} alt="Geste-Croissanterie-Final-logo" border="0" />
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
          <ListItem button key={link.name} alignItems="flex-end">
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
    { name: "About Us", icon: <SupervisedUserCircleIcon /> },
    { name: "Our Work", icon: <WorkIcon /> },
    { name: "Contact Us", icon: <ContactMailIcon /> },
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
