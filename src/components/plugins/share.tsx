import React from "react"
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterIcon, TwitterShareButton } from "react-share"
import { Grid } from "@material-ui/core"

export default function SocialMediaButtons(props) {
  return (
    <Grid container direction={props.direction}>
      <FacebookShareButton
        url={"http://www.geste-crossaints.com"}
        quote={" Geste Crossiants - for boutique baked condiments  "}
        hashtag="#geste-crossaints"
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>
      <WhatsappShareButton
        url={"http://www.geste-crossaints.com"}
        about={ " Geste Crossiants - for boutique baked condiments  "}
        
      >
        <WhatsappIcon size={36} />
      </WhatsappShareButton>
      <TwitterShareButton
        url={"http://www.geste-crossaints.com"}
        about={ "Geste Crossiants - for boutique baked condiments  "}
        
      >
        <TwitterIcon size={36} />
      </TwitterShareButton>
    </Grid>
  )
}
