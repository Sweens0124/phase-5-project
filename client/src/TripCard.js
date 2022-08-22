import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom';
import { ImageListItem } from '@mui/material'

const TripCard = ({ trip }) => {
  const { location, date, hotel_desc, image } = trip
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/trip-page/${trip.id}`)
  }

  return (
    <Grid item xs={ 4 }>
      <Paper elevation={ 15 }>
        <Box padding={ 1 } sx={ {
          flexGrow: 1,
          textAlign: 'center',
          justifyContent: 'center'
        } } >
          <Typography component="h4" variant="h4">
            { location }
            <Typography component="h4" variant="h6">
              { date }
            </Typography>
            {/* <Typography variant="body1">
              { hotel_desc }
            </Typography> */}
          </Typography>
        </Box>
        <ImageListItem sx={ { width: 500, height: 450 } } cols={ 2 }>
          <img sx={ { mr: 2 } }
            src={ image }
            alt="hotel"
            className="img"
          />
        </ImageListItem>
        <Button className='trip-btn' variant="contained" onClick={ handleClick } >View Trip Details</Button>
      </Paper>
    </Grid>

  )
}

export default TripCard;