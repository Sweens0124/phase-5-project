import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const TripCard = ({ trip }) => {
  const { location, date, single_price, double_price, hotel, hotel_desc, image } = trip

  return (
    <Grid item xs={ 12 }>
      <Paper elevation={ 3 }>
        <img
          src={ image }
          alt="Image of hotel"
          className="img"
        />
        <Typography component="h5" variant="h5">
          { location }
        </Typography>
      </Paper>
    </Grid>

  )
}

export default TripCard;