import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box'
import ImageCollage from './ImageCollage'

const TripPage = ({ trips }) => {
  const { id } = useParams();
  const filteredTrip = trips.filter(trip => trip.id === parseInt(id))
  const trip = filteredTrip[ 0 ];

  const displayPackages = trip?.packages.map((pack, index) => {
    return (
      <li key={ index }>{ pack }</li>
    )
  })



  return (
    <>
      <Navbar />
      <Container sx={ { width: 900 } }>
        <Typography variant="h3" component="h1" marginTop={ 3 } >
          Visit { trip?.location }!
        </Typography>
        <Box marginTop={ 3 } sx={ { display: 'flex' } }>
          <img src='https://media.istockphoto.com/photos/villefranchesurmer-village-in-france-picture-id1248448159?k=20&m=1248448159&s=612x612&w=0&h=leahrG95LcBDfdkPCavNL9W8ZC2OroNZPqO-196HDPU=' alt='' height={ 325 } />
          <ImageCollage />
        </Box>
        <Typography variant='h5' component="h4" marginTop={ 1 }>
          Enjoy the { trip?.hotel }.
        </Typography>
        <Typography variant='h6' component="h4" marginTop={ 1 }>
          { trip?.hotel_desc }.
        </Typography>
        <Typography variant="h4" component="h3">
          Packages Include:
          <Typography variant="h5" component="h4">
            { displayPackages }
          </Typography>
        </Typography>

      </Container>
    </>
  )
}

export default TripPage;