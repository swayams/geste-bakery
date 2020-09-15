import * as React from "react"

import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api"
import { Grid } from "@material-ui/core"
import { Marker } from "@react-google-maps/api"
import SocialMediaButtons from "../plugins/share"
import { CommunicationPhone } from "material-ui/svg-icons"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"

const containerStyle = {
  width: "100vw",
  height: "80vh",
}

const center = {
  lat: 43.65107,
  lng: -79.347015,
}

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
}

export interface ILocationProps {}

export interface ILocationState {
  latitude: string
  longitude: string
}

class Location extends React.Component<ILocationProps, ILocationState> {
  constructor(props: ILocationProps) {
    super(props)
    this.state = { latitude: "", longitude: "" }
  }
  render() {
    return (
      <Grid container className="location">
        <Grid item xs={12} md={4} className="address">
          <Grid item xs={12} className="postal">
            <span>Geste Croissanterie</span> <br />
            1183, Dundas street W , <br />
            Toronto, ON, M6J 1X3
          </Grid>

          <Grid item xs={12} className="contacts">
            <a href="mailto:info@geste-croissant.com">
              info@geste-croissant.com
            </a>
          </Grid>
          <Grid item xs={12} className="contacts">
            <a href="tel:+1 (416) 538-1710">1 (416) 538-1710</a>
          </Grid>

          <Grid item xs={12} className="social">
            <SocialMediaButtons />
          </Grid>

          
        </Grid>
        <Grid item xs={12} md={8}>
          <LoadScript googleMapsApiKey="AIzaSyCOUmhCArKoozXuwAiiKEk5WL4euKTRiSw">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <InfoWindow position={center}>
                <div style={divStyle}>
                  <h4>Toronto</h4>
                </div>
              </InfoWindow>
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    )
  }
}

export default Location
