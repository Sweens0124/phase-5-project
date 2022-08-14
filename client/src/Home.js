import Navbar from './Navbar';
import companyLogo from './images/logo.JPG'

const Home = () => {
  const welcome = "Welcome to Girls Getaway! \n from Middleton Travel"

  return (
    <>
      <Navbar />
      <div id="welcome" className='linebreak'>
        <img src={ companyLogo } alt='company logo' id='main-logo' />
        <h1>{ welcome }</h1>
      </div>
    </>

  )
}

export default Home;