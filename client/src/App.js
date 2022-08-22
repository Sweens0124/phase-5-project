import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from './Home';
import Login from './Login';
import Signup from './Signup'
import TripPage from './TripPage';
import RegistrationForm from './RegistrationForm';


function App () {
  const [ user, setUser ] = useState(null)
  const [ trips, setTrips ] = useState([])

  useEffect(() => {
    fetch("/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips));
  }, []);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <Routes>
      <Route path="/" element={ <Home trips={ trips } /> } />
      <Route path="/login" element={ <Login onLogin={ setUser } /> } />
      <Route path="/signup" element={ <Signup onLogin={ setUser } /> } />
      <Route path="/trip-page/:id" element={ <TripPage trips={ trips } /> } />
      <Route path="/registration" element={ <RegistrationForm /> } />
    </Routes>
  );
}

export default App;
