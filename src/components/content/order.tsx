import * as React from "react"
import { OrderUrl } from "../../constants/config"
import { Button, Link } from "@material-ui/core"

const Order = () => {
  return (

    <Button href={OrderUrl} target="_blank" variant="contained" color="secondary" className="order-button">Order Now</Button>
    
  )
}

export default Order
