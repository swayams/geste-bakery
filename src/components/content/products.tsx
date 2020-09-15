import * as React from "react"
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActionArea,
  CardMedia,
  CardActions,
  Grow,
} from "@material-ui/core"
import { ui } from "../../constants/ui"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SocialMediaButtons from "../plugins/share"
import { ImageContext } from "./Images"
import images from "../../constants/images"
import { graphql, useStaticQuery } from "gatsby"

export interface IProductProps {
  name: string
  description?: string
  image: string
}

export interface IProductState {
  isExpanded: boolean
  showShareIcons: boolean
  isLiked: boolean
}

class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: IProductProps) {
    super(props)
    this.state = { isExpanded: false, showShareIcons: false, isLiked: false }
  }

  expand = () => {
    this.setState(prev => ({
      isExpanded: !prev.isExpanded,
    }))
  }

  like = () => {
    this.setState(prev => ({
      isLiked: !prev.isLiked,
    }))
  }

  share = () => {
    this.setState(prev => ({
      showShareIcons: !prev.showShareIcons,
    }))
  }
  render() {
    return (
      <Grow in={true}>
        <Grid item xs={12} md={this.state.isExpanded ? 6 : 4}>
          <Grid
            container
            style={style.product}
            justify="space-between"
            className="product"
          >
            <Card>
              <CardActionArea className="card">
                <CardMedia
                  image={this.props.image}
                  className="image"
                ></CardMedia>
                <CardContent className="content">
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {this.state.isExpanded
                      ? this.props.description
                      : this.props.description.substring(0, 100) + " ..."}
                  </Typography>

                  {this.state.isExpanded ? (
                    <Items name={this.props.name}></Items>
                  ) : (
                    ""
                  )}
                </CardContent>
              </CardActionArea>

              <CardActions className="actions">
                <IconButton
                  aria-label="add to favorites"
                  className="icon"
                  onClick={() => this.like()}
                >
                  <FavoriteIcon
                    style={{ color: this.state.isLiked ? "red" : "#fff" }}
                  />
                </IconButton>
                <IconButton
                  aria-label="share"
                  className="icon"
                  onClick={() => this.share()}
                >
                  <ShareIcon direction="row-reverse" />
                </IconButton>
              </CardActions>

              <CardActions className="expand">
                <IconButton className="icon" onClick={() => this.expand()}>
                  {this.state.isExpanded ? (
                    <ExpandLess style={style.expansion} />
                  ) : (
                    <ExpandMoreIcon style={style.expansion} />
                  )}
                </IconButton>

                {this.state.showShareIcons ? (
                  <SocialMediaButtons
                    className="share-Icons"
                    direction="row-reverse"
                  ></SocialMediaButtons>
                ) : (
                  ""
                )}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grow>
    )
  }
}

const Products = () => {
  const query = graphql`
    query AllImages {
      allCloudinaryAsset {
        edges {
          node {
            fluid {
              src
            }
          }
        }
      }
    }
  `

  const images = useStaticQuery(query)
  const products = []
  images.allCloudinaryAsset.edges.forEach(image => {
    if (image.node.fluid.src.includes("product-")) {
      products.push(image.node.fluid.src)
    }
  })
  return (
    <Grid container className="products" spacing={3}>
      {productNames.map((product: string, index: number) => {
        return (
          <Product
            name={product}
            key={index}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            image={products.find(p => p.includes(product))}
          />
        )
      })}
    </Grid>
  )
}

export default Products

const Items = props => {
  //useStaticQuery(query).allCloudinaryAsset.edges.forEach( image => image.f)

  let menu: IMenu = menuList.find(m => m.name == props.name)

  return (
    <div className={"menu"}>
      {menu.items.map(item => {
        return (
          <div className="item">
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </div>
        )
      })}
    </div>
  )
}

const style = {
  img: {
    backgroundColor: "#e6e6e6",
    width: "80%",
    margin: "0 10%",
  },
  paper: {
    padding: "1em",
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ui.scheme.backgroundAlt,
  },
  product: {
    minHeight: "23.5em",
  },

  expansion: {
    transform: "rotate(90)",
  },
}

interface IProduct {
  name: string
  description: string
  imageUrl: string
}

//configuration

const productNames = ["breads", "viennoiserie", "patisserie"]

const menuList: IMenu[] = [
  {
    name: productNames[0],
    items: [
      { name: "Butter croissant ", price: "3.25" },
      { name: "Almond croissant ", price: "4" },
      { name: "Pain au chocolat", price: "3.75" },
      { name: "Almond Pain au chocolat", price: "4.25" },
      { name: "Double Chocolate pain au chocolat", price: "4.25" },
      { name: "Raspberry croissant ", price: "5" },
      { name: "Nutella Cruffin ", price: "5" },
    ],
  },

  {
    name: productNames[1],
    items: [
      { name: "Butter croissant ", price: "3.25" },
      { name: "Almond croissant ", price: "4" },
      { name: "Pain au chocolat", price: "3.75" },
      { name: "Almond Pain au chocolat", price: "4.25" },
      { name: "Double Chocolate pain au chocolat", price: "4.25" },
      { name: "Raspberry croissant ", price: "5" },
      { name: "Nutella Cruffin ", price: "5" },
    ],
  },
  {
    name: productNames[2],
    items: [
      { name: "Butter croissant ", price: "3.25" },
      { name: "Almond croissant ", price: "4" },
      { name: "Pain au chocolat", price: "3.75" },
      { name: "Almond Pain au chocolat", price: "4.25" },
      { name: "Double Chocolate pain au chocolat", price: "4.25" },
      { name: "Raspberry croissant ", price: "5" },
      { name: "Nutella Cruffin ", price: "5" },
    ],
  },
]

interface IMenu {
  name: string
  items: IMenuItem[]
}

interface IMenuItem {
  name: string
  price: string
}
