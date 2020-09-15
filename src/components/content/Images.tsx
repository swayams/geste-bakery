import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
const CImages = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allCloudinaryAsset {
        nodes {
          fluid {
            src
          }
        }
      }
    }
  `)
  const clImages = data.allCloudinaryAsset.nodes

  return clImages
}

const getImages = () => {
  const CloudinaryImages = CImages()

  let imagesList = []

  CloudinaryImages.forEach(item => {
    imagesList.push(item.fluid.src)
  })

  return imagesList
}

export const ImageContext = React.createContext(null)
export const ImageProvider = props => {
  const images = React.useState(getImages())

  return (
    <ImageContext.Provider value={images}>
      {props.children}
    </ImageContext.Provider>
  )
}
