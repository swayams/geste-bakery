import * as React from "react"

import { Grid, Paper, Button } from "@material-ui/core"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundSlider from "gatsby-image-background-slider"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { ui } from "./../../constants/ui"
import './hero.scss'

const HeroCarousel = () => (
  <BackgroundSlider
    query={useStaticQuery(query)}
    initDelay={2}
    transition={4}
    style={style.carousel}
    duration={8}
    callbacks={() => {
      console.log("callback")
    }}
    images={["rolls.jpg", "loaf.jpg", "bakery.jpg"]}
  >
    {carouselData.map((item, index) => (
      <Paper variant="outlined" square style={style.content} className="carousel" key={index}>
        {/* <div className="carousel-content">
          <h1 style={style.content.title}>{item.title}</h1>
          <div className="sub-title"> { item.description } </div>
          <Button variant="contained" color="primary" href="#">
            Reach Us
          </Button>
        </div> */}
      </Paper>
    ))}
  </BackgroundSlider>
)

export default HeroCarousel

const carouselData = [
  { title: "Articulate", description: "Nuances. Sentiments. Trends." },
  { title: "Realise", description: "Potential. Possibilities. Opportunities" },
  { title: "Create", description: "Stories. Ideas. Memories" },
]

const query = graphql`
  query Query1 {
    backgrounds: allFile(filter: { sourceInstanceName: { eq: "carousel" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const style = {
  carousel: {
    height: "100vh",
    display: "flex",
    flexFlow: "column",
  },
  content: {
    backgroundColor: ui.hero.content.background,
   

    title: {
      textTransform: "uppercase",
      color: ui.hero.content.title.color,
    },
  },
}
