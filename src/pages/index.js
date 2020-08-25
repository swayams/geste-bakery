import React from "react"

import Layout from "../components/container/layout"
import HeroCarousel from "../components/carousel/hero"

import Area from "../components/container/area"
import { Grid } from '@material-ui/core';

import Newsletter from './../components/content/newsletter';

const IndexPage = () => (
  <Layout>
    <Grid container style= {{ height: '100vh'}} >
      <HeroCarousel></HeroCarousel>
    </Grid>

    <Area id="test 1" alt={true}></Area>
    <Area id="test 2" alt={false}></Area>
    <Area id="test 3" alt={true}>
      <Newsletter />
    </Area>
    <Area id="test 2" alt={false}></Area>
  </Layout>
)

export default IndexPage
