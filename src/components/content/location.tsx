import * as React from "react"

import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api"
import { Grid } from "@material-ui/core"
import { Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100vw",
  height: "80vh",
}

const center = {
  lat: 43.651070,
  lng: -79.347015,
}

const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
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
      <Grid container>
        <LoadScript googleMapsApiKey="AIzaSyCOUmhCArKoozXuwAiiKEk5WL4euKTRiSw">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <InfoWindow  position={center}>
              <div style={divStyle}>
                <h4>Toronto</h4  >
              </div>
            </InfoWindow>
          </GoogleMap>
        </LoadScript>
      </Grid>
    )
  }
}

export default Location
