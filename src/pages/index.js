import React from "react"

import Layout from "../components/container/layout"
import HeroCarousel from "../components/carousel/hero"

import Area from "../components/container/area"
import { Grid } from "@material-ui/core"

import Products from "../components/content/products"
import About from "../components/content/about"
import Location from "../components/content/location"
import SimpleTextBlock from "./../components/content/textblock"
import { ParallaxProvider } from "react-scroll-parallax"
import ContactForm from "./../components/content/contact"

const IndexPage = () => (
  <ParallaxProvider>
    <Helmet>
      <meta charSet="utf-8" name="description">Bespoke artisanal bread and Croissants handmade in house from local and organic ingrediants.</meta>
      <title>Geste Crossiants</title>
      <link rel="canonical" href="https://geste-croissant.com" />
      
    </Helmet>
    <Layout>
      <Grid container style={{ height: "100vh" }} id={"hero"}>
        <HeroCarousel></HeroCarousel>
      </Grid>
      <SimpleTextBlock text="Therefore, the smart way to build a massive online following is to embed Instagram feeds and other social media profiles to your website." />
      <Area id="Products" name="Products" alt={false}>
        <Products />
      </Area>
      <Area id="contact" name="Contact" alt={false}>
        <ContactForm />
      </Area>
      <Area id="Story" name="Story" alt={false}>
        <About />
      </Area>
      <SimpleTextBlock text="Therefore, the smart way to build a massive online following is to embed Instagram feeds and other social media profiles to your website." />

      <Area id="Location" name="Location" alt={false}>
        <Location />
      </Area>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage
