import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Signup from './Signup'


function App () {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/sign-in" element={ <SignIn /> } />
      <Route path="/signup" element={ <Signup /> } />
    </Routes>
  );
}

export default App;
