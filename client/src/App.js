import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from './Home';
import Login from './Login';
import Signup from './Signup'
import TripPage from './TripPage';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';


function App () {
  const [ user, setUser ] = useState(null)
  const [ trips, setTrips ] = useState([])
  const [ userTrips, setUserTrips ] = useState({})

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

  let id = user?.id

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((data) => setUserTrips(data.user_trips))
  }, [])

  return (
    <>
      <Navbar userLogged={ user } onSetUser={ setUser } />
      <Routes>
        <Route path="/" element={ <Home trips={ trips } /> } />
        <Route path="/login" element={ <Login onLogin={ setUser } /> } />
        <Route path="/signup" element={ <Signup onLogin={ setUser } /> } />
        <Route path="/trip-page/:id" element={ <TripPage userLogged={ user } trips={ trips } /> } />
        <Route path="/user/:id" element={ <Profile userLogged={ user } userTrips={ userTrips } /> } />
      </Routes>
    </>
  );
}

export default App;
