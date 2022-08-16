import Navbar from './Navbar';
import companyLogo from './images/logo.JPG'
import TripCard from './TripCard';
import { useEffect, useState } from 'react';

const Home = () => {
  const welcome = "Welcome to Girls Getaway! \n from Middleton Travel"
  const [ trips, setTrips ] = useState([])

  useEffect(() => {
    fetch("/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips));
  }, []);

  const tripInfo = trips.map((trip) => {
    return (
      <TripCard
        key={ trip.id }
        trip={ trip }
      />
    )
  })


  return (
    <>
      <Navbar />
      <div id="welcome" className='linebreak'>
        <img src={ companyLogo } alt='company logo' id='main-logo' />
        <div id='home-text'>
          <h1>{ welcome }</h1>
          <h3>Browse Through Our 5-Star Trips!</h3>
        </div>
      </div>
      { tripInfo }
    </>

  )
}

export default Home;