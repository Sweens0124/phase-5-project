import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from './Home';
import Login from './Login';
import Signup from './Signup'


function App () {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);
  console.log(users);


  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
    </Routes>
  );
}

export default App;
