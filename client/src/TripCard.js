import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom';
import { ImageListItem } from '@mui/material'

const TripCard = ({ trip }) => {
  const { location, date, single_price, double_price, hotel, hotel_desc, image } = trip
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/trip-page/${trip.id}`)
  }

  return (
    <Grid item xs={ 12 }>
      <Paper elevation={ 12 }>
        <Box padding={ 1 } sx={ {
          flexGrow: 1
        } } >
          <Typography component="h4" variant="h4">
            { location }
            <Typography component="h5" variant="h5">
              { hotel }
            </Typography>
            <Typography variant="body1">
              { hotel_desc }
            </Typography>
          </Typography>
          <ImageListItem sx={ { width: 500, height: 450 } } cols={ 2 }>
            <img sx={ { mr: 2 } }
              src={ image }
              alt="hotel"
              className="img"
            />
            <img sx={ { mr: 2 } }
              src='https://media.istockphoto.com/photos/villefranchesurmer-village-in-france-picture-id1248448159?k=20&m=1248448159&s=612x612&w=0&h=leahrG95LcBDfdkPCavNL9W8ZC2OroNZPqO-196HDPU='
              alt="hotel"
              className="img"
            />
          </ImageListItem>
          <Button onClick={ handleClick } >View Trip Details</Button>
        </Box>
      </Paper>
    </Grid>

  )
}

export default TripCard;