import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const TripCard = ({ trip }) => {
  const { location, date, single_price, double_price, hotel, hotel_desc, image } = trip

  return (
    <Grid item xs={ 12 }>
      <Paper elevation={ 15 }>
        <Box padding={ 1 } sx={ { width: 425 } }>
          <Typography component="h5" variant="h5">
            { location }
          </Typography>
          <img
            src={ image }
            alt="Image of hotel"
            className="img"
          />
        </Box>
      </Paper>
    </Grid>

  )
}

export default TripCard;