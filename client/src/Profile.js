import { Paper, Typography, Grid, Box } from '@mui/material';
import { Container } from '@mui/system';
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


const Profile = ({ userLogged }) => {
  const [ userTrips, setUserTrips ] = useState([])
  const [ show, setShow ] = useState(false)
  const [ username, setUsername ] = useState(userLogged?.username)
  const [ image, setImage ] = useState(userLogged?.image)
  const [ updated, setUpdated ] = useState(false)

  const handleShow = () => setShow(!show)

  const handleNameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append('username', username)
    formData.append('image', image)

    fetch(`/users/${userLogged?.id}`, {
      method: "PATCH",
      body: formData
    }).then(r => r.json())
      .then(r => console.log(r))
    setUpdated(true)
  }

  useEffect(() => {
    fetch("/user_trips")
      .then((r) => r.json())
      .then((data) => setUserTrips(data));
  }, []);

  const filteredUserTrips = userTrips.filter(trip => trip.user.id === userLogged?.id)
  // console.log('This Users trips ->', filteredUserTrips)

  // const filterNice = userTrips.filter(trip => trip.trip.id === 1)
  // const filterNewYork = userTrips.filter(trip => trip.trip.id === 2)
  // const filterChicago = userTrips.filter(trip => trip.trip.id === 3)
  // const filterLisbon = userTrips.filter(trip => trip.trip.id === 4)


  // console.log('Nice ->', filterNice.length)
  // console.log('New York ->', filterNewYork)
  // console.log('Chicago ->', filterChicago)
  // console.log('Lisbon ->', filterLisbon)


  const tripInfo = filteredUserTrips.map(trip => {
    let id = trip.trip.id

    return (
      <Grid key={ id } item xs={ 4 }>
        <Paper elevation={ 12 }>
          <Box>
            <Typography variant="h4" component="h1" marginTop={ 2 } sx={ { textAlign: 'left' } }>
              { trip.trip.location }
              <Typography>
                { trip.trip.date }
              </Typography>
            </Typography>
            <Typography>
              {/* question for Emiley tomorrow morning! */ }
            </Typography>
            {/* <Button onClick={handleLength} variant='contained' key={ id }>View Users Going to { trip.trip.location }</Button> */ }
          </Box>
        </Paper>
      </Grid>
    )
  })

  return (
    <div className='profile-page'>
      <Button variant='contained' id='edit-profile' onClick={ handleShow }>
        Edit Profile
      </Button>
      <h1 className='user-welcome'> Welcome, { userLogged?.username }! </h1>
      <Container className='container2'>
        <Grid container spacing={ 4 } alignItems='center' display='flex'>
          { tripInfo }
        </Grid>
      </Container>
      <Modal show={ show }>
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={ handleSubmit }>
            <Form.Label>Username</Form.Label>
            <Form.Control as="textarea" value={ username } onChange={ handleNameChange } placeholder={ username } />
            <Form.Label>Image</Form.Label>
            <Form.Control name="image" type="file" accept="image/*" onChange={ (e) => setImage(e.target.files[ 0 ]) } />
            <Modal.Footer>
              <Button variant='contained' type='submit'>
                Submit Changes
              </Button>
            </Modal.Footer>
            { updated && <div>Successfully Updated</div> }
            <Button onClick={ handleShow }>Close</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Profile;