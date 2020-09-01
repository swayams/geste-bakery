import React from "react"

import Layout from "../components/container/layout"
import HeroCarousel from "../components/carousel/hero"

import Area from "../components/container/area"
import { Grid } from "@material-ui/core"

import Newsletter from "./../components/content/newsletter"
import Products from "../components/content/products"
import About from "../components/content/about"
import Location from "../components/content/location"
import InstagramFeed from "./../components/plugins/instagram"
import SimpleTextBlock from "./../components/content/textblock"

const IndexPage = () => (
  <Layout>
    <Grid container style={{ height: "100vh" }}>
      <HeroCarousel></HeroCarousel>
    </Grid>
    <SimpleTextBlock text="Therefore, the smart way to build a massive online following is to embed Instagram feeds and other social media profiles to your website." />
    <Area id="Products" alt={false}>
      <Products />
    </Area>
    <Area id="Newsletter" alt={true}>
      <Newsletter />
    </Area>
    <Area id="Story" alt={false}>
      <About />
    </Area>
    <SimpleTextBlock text="Therefore, the smart way to build a massive online following is to embed Instagram feeds and other social media profiles to your website." />
    
    <Area id="Location" alt={true}>
      <Location />
    </Area>
    <Area id="Instagram" alt={true}>
      <InstagramFeed />
    </Area>
  </Layout>
)

export default IndexPage
