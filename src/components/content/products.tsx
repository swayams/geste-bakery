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
import images from "../../constants/images"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { ImageCropRotate } from "material-ui/svg-icons"
import SocialMediaButtons from "../plugins/share"

export interface IProductProps {
  name: string
  imageUrl: string
  description: string
}

export interface IProductState {
  isExpanded: boolean
  showShareIcons: boolean
}

class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: IProductProps) {
    super(props)
    this.state = { isExpanded: false, showShareIcons: false }
  }

  expand = () => {
    this.setState(prev => ({
      isExpanded: !prev.isExpanded,
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
        <Grid
          item
          xs={12}
          md={this.state.isExpanded ? 8 : 4}
          lg={this.state.isExpanded ? 6 : 3}
        >
          <Grid
            container
            style={style.product}
            justify="space-between"
            className="product"
          >
            <Card>
              <CardActionArea className="card">
                <CardMedia image={images.cBread} className="image"></CardMedia>
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
                </CardContent>
              </CardActionArea>

              <CardActions className="actions">
                <IconButton aria-label="add to favorites" className="icon">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" className="icon" onClick={() => this.share()}>
                  <ShareIcon  />
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

                {
                this.state.showShareIcons ? 
                <SocialMediaButtons className="share-Icons"></SocialMediaButtons>
                : ""
              }
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grow>
    )
  }
}

const Products = () => {
  return (
    <Grid container className="products" spacing={3}>
      {productList.map((product: IProduct, index: number) => {
        return <Product {...product} key={index} />
      })}
    </Grid>
  )
}

export default Products

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
    margin: "10px",
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

const productList: IProduct[] = [
  {
    name: "Breads",
    description:
      "Our Bread is kneaded, shaped, and baked right from our very own kitchen. We ensure the exquisite quality of bread as we let its pleasant aromes and natural nutritional qualities come into effect after a 24-hour fermentation",
    imageUrl: images.cBread,
  },
  {
    name: "Crossiants",
    description:
      "All of our pastries are 100 percent made with pure butter, and are daily made by our professional dough makers in our bakery. ",
    imageUrl: images.cBread,
  },
  {
    name: "Condiments",
    description:
      "For each of our recipes, we make sure to create the perfect balance between the amazing taste, the premium quality of the ingredients, all of which at an affordable price",
    imageUrl: images.cBread,
  },
  {
    name: "Cookies",
    description:
      "Almonds, chocolate chips, Pineapple, sourdough. For each of our recipes, we make sure to create the perfect balance between the amazing taste, the premium quality of the ingredients, all of which at an affordable price",
    imageUrl: images.cBread,
  },
  {
    name: "Creations",
    description:
      "brought straight to you from our experimental kitchen. Explore our take on fusion dessert and contrasting flavours. Indulge the adventurer within you.",
    imageUrl: images.cBread,
  },
  {
    name: "Made to Order",
    description:
      "For all your celebrations. We make sure we put in our all to make it extra special. Almonds, chocolate chips, Pineapple, sourdough. For each of our recipes, we make sure to create the perfect balance between the amazing taste, the premium quality of the ingredients, all of which at an affordable price",
    imageUrl: images.cBread,
  },
]
