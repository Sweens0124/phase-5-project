import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom';

const TripCard = ({ trip }) => {
  const { location, date, single_price, double_price, hotel, hotel_desc, image } = trip
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/trip-page/${trip.id}`)
  }

  return (
    <Grid item xs={ 12 }>
      <Paper elevation={ 15 }>
        <Box padding={ 1 } sx={ { width: 425 } }>
          <Typography component="h5" variant="h5">
            { location }
          </Typography>
        </Box>
        <img
          src={ image }
          alt="Image of hotel"
          className="img"
        />
        <Button onClick={ handleClick } >View Trip Details</Button>
      </Paper>
    </Grid>

  )
}

export default TripCard;