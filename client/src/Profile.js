import { Navbar } from 'react-bootstrap';

const Profile = ({ userLogged, userTrips }) => {

  return (
    <>
      <Navbar />
      <div> Welcome { userLogged.username } </div>
    </>
  )
}

export default Profile;