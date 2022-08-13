import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';


function App () {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/sign-in" element={ <SignIn /> } />
    </Routes>
  );
}

export default App;
