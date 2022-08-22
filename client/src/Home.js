import companyLogo from './images/logo.JPG'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TripCard from './TripCard';

const Home = ({ trips }) => {
  const welcome = "Welcome to Girls Getaway! \n from Middleton Travel"

  const tripCards = trips.map((trip) => {
    return (
      <TripCard
        key={ trip.id }
        trip={ trip }
      />
    )
  })


  return (
    <>
      <div id="welcome" className='linebreak'>
        <img src={ companyLogo } alt='company logo' id='main-logo' />
        <div id='home-text'>
          <h1>{ welcome }</h1>
          <h3>Browse Through Our 5-Star Trips!</h3>
        </div>
      </div>
      <Container className='container'>
        <Grid container spacing={ 4 }>
          { tripCards }
        </Grid>
      </Container>
    </>

  )
}

export default Home;