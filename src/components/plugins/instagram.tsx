import * as React from "react"
import InstagramEmbed from "react-instagram-embed"

const InstagramFeed = props => {
  return (
    <InstagramEmbed
      url="https://www.instagram.com/croissant_eater"
      maxWidth={1024}
      hideCaption={false}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  )
}

export default InstagramFeed
