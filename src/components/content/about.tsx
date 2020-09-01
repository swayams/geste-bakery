import * as React from "react"
import {
  Grid,
  Paper,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import images from "../../constants/images"
import { ui } from '../../constants/ui';

const About = props => {
  return (
    <Grid container className="about" >
      <Card className="content">
        <CardMedia image={images.cProfile} title="virgyl" className="profile">
            <img src={images.cProfile} alt="virgyl"></img>
        </CardMedia>
        <CardContent className="description" style={style}>
          <Typography gutterBottom variant="h5" component="h2">
            Meet the Chef
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            After completing his bachelor’s degree in Hotel Management and
            Catering Technology from India, Chef Virgyl Fernandes took up
            various culinary roles in Singapore, Australia and France. He moved
            to Canada in 2015 to specialize in French baking and pastry. He has
            completed the Advanced French Patisserie postgraduate program of
            George Brown College, and has earned his Certificat D'aptitude
            Professionnelle from France's renowned pastry school, Ecole
            Nationale Supérieure de Patisserie.  <br/> <br />
            
            Chef Virgyl has had exposure to
            various facets of hospitality business over the last 10 years,
            including stints at the Sydney Opera House, some Michelin-starred
            restaurants, small neighborhood eateries, private clubs, star hotels
            as well as artisanal bakeries. In his most recent role, Chef Virgyl
            was Pre-opening Chef at Treizieme Boulangerie in Oakville, Canada.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default About

const style: CSSProperties = {
  backgroundColor: ui.scheme.backgroundAlt,
}
