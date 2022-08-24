import { Paper, Typography, Grid, Button } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box'
import ImageCollage from './ImageCollage'
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { Modal } from 'react-bootstrap'

const TripPage = ({ trips, userLogged }) => {
  const [ showModal, setShowModal ] = useState(false)

  // const handleShowModal = () => {
  //   setShowModal(!showModal)
  // }

  console.log(userLogged)

  const { id } = useParams();
  const filteredTrip = trips.filter(trip => trip.id === parseInt(id))
  const trip = filteredTrip[ 0 ];

  const displayPackages = trip?.packages.map((pack, index) => {
    return (
      <li key={ index }>{ pack }</li>
    )
  })

  const pricing = `Single Occupancy - $ ${trip?.single_price}.00 \n Double Occupancy - $ ${trip?.double_price}.00`

  return (
    <div className='trip-page'>
      <Container sx={ {
        width: 900,
        backgroundColor: 'aquamarine'
      } }>
        <Typography variant="h3" component="h1" marginTop={ 2 } sx={ { textAlign: 'center' } }>
          Visit { trip?.location }!
        </Typography>
        <Box marginTop={ 3 } sx={ {
          display: 'flex',
          marginLeft: 4
        } }>
          <img src={ trip?.image } alt='' height={ 325 } />
          <ImageCollage />
        </Box>
        <Paper elevation={ 8 } sx={ { borderRadius: 10 } } >
          <Box sx={ {
            width: 700,
            textAlign: 'center',
            margin: 'auto',
            marginTop: 3,
            marginBottom: 2
          } }>
            <Typography variant='h5' component="h4" marginTop={ 1 }>
              Enjoy the { trip?.hotel }.
            </Typography>
            <Typography variant='h6' component="h4" marginTop={ 2 }>
              { trip?.hotel_desc }.
            </Typography>
          </Box>
        </Paper>
        <Grid container spacing={ 4 }>
          <Grid item xs={ 6 }>
            <Paper elevation={ 10 }>
              <Typography variant="h5" component="h3">
                Packages Include:
              </Typography>
              <Typography variant="h6" component="h5">
                { displayPackages }
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={ 6 }>
            <Paper elevation={ 10 }>
              <Typography variant="h5" component="h3">
                Pricing Details:
              </Typography>
              <Typography variant="h6" component="h5" className='linebreak'>
                { pricing }
              </Typography>

            </Paper>
          </Grid>
        </Grid>
        <Button variant='contained' onClick={ () => setShowModal(true) }> Registration Form </Button>
      </Container>
      <Modal show={ showModal }>
        <Modal.Header>
          <Modal.Title>
            <RegistrationForm userLogged={ userLogged } trip={ trip } />
          </Modal.Title>
        </Modal.Header>
        <Button onClick={ () => setShowModal(false) }>
          Close
        </Button>
      </Modal>
    </div>
  )
}

export default TripPage;