import { Navbar } from 'react-bootstrap';

const Profile = ({ userLogged, userTrips }) => {

  console.log(userLogged, userTrips)

  return (
    <>
      <Navbar />
      <div> Profile Stuff Here </div>
    </>
  )
}

export default Profile;