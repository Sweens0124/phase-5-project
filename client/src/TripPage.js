import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from './Navbar';

const TripPage = ({ trips }) => {

  // const filteredTrip = () => trips.filter(trip => (trip.id === id))
  // console.log(filteredTrip);

  return (
    <>
      <Navbar />
      <Container sx={ { width: 900 } }>
        <Typography variant="h3" component="h1" marginTop={ 3 }>
          { }
        </Typography>
      </Container>
    </>
  )
}

export default TripPage;