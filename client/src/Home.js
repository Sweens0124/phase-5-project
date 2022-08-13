import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const handleSignInRoute = () => {
    navigate('/sign-in')
  }

  return (
    <button onClick={ handleSignInRoute }> sign-in here </button>
  )
}

export default Home;