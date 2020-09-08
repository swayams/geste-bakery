import React from "react"

import Layout from "../components/container/layout"
import HeroCarousel from "../components/carousel/hero"

import Area from "../components/container/area"
import { Grid } from "@material-ui/core"

import NewsLetterBlock from "./../components/content/newsletter"
import Products from "../components/content/products"
import About from "../components/content/about"
import Location from "../components/content/location"
import InstagramFeed from "./../components/plugins/instagram"
import SimpleTextBlock from "./../components/content/textblock"
import { ParallaxProvider } from "react-scroll-parallax"
import ContactForm from './../components/content/contact';

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Grid container style={{ height: "100vh" }}>
        <HeroCarousel></HeroCarousel>
      </Grid>
      <SimpleTextBlock text="Therefore, the smart way to build a massive online following is to embed Instagram feeds and other social media profiles to your website." />
      <Area id="Products" alt={false}>
        <Products />
      </Area>
      <Area id="Newsletter" alt={false}>
        <NewsLetterBlock />
      </Area>
      <Area id="Story" alt={false}>
        <About />
      </Area>
      <SimpleTextBlock text="Therefore, the smart way to build a massive online following is to embed Instagram feeds and other social media profiles to your website." />
      <Area id="contact" alt={false}>
        <ContactForm />
      </Area>
      <Area id="Location" alt={false}>
        <Location />
      </Area>
      <Area id="Instagram" alt={true}>
        <InstagramFeed />
      </Area>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage
