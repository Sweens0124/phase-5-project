import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from './Home';
import Login from './Login';
import Signup from './Signup'
import TripPage from './TripPage';


function App () {
  const [ users, setUsers ] = useState([])
  const [ trips, setTrips ] = useState([])

  useEffect(() => {
    fetch("/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips));
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <Routes>
      <Route path="/" element={ <Home trips={ trips } /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/trip-page/:id" element={ <TripPage trips={ trips } /> } />
    </Routes>
  );
}

export default App;
