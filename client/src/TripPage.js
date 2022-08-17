import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';


const TripPage = ({ trips }) => {

  let { id } = useParams();
  const filteredTrip = trips.filter(trip => trip.id === parseInt(id))
  let trip = filteredTrip[ 0 ];
  console.log('filtered array ->', filteredTrip);
  console.log('id ->', parseInt(id))
  console.log('Trip object ->', trip);

  return (
    <>
      <Navbar />
      <Container sx={ { width: 900 } }>
        <Typography variant="h3" component="h1" marginTop={ 3 } >
          Visit { trip?.location }!
        </Typography>
      </Container>
    </>
  )
}

export default TripPage;