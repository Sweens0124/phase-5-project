import { SecurityUpdateGood } from '@mui/icons-material';
import { Button } from '@mui/material'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const Profile = ({ userLogged, userTrips }) => {

  const [ show, setShow ] = useState(false)
  const [ username, setUsername ] = useState(userLogged?.username)
  const [ image, setImage ] = useState(userLogged?.image)
  const [ updated, setUpdated ] = useState(false)

  const handleShow = () => setShow(!show)

  console.log(userTrips);
  const handleNameChange = (e) => {
    setUsername(e.target.value)
  }

  // const handleUpdatedUser = (id, updatedUser) => {

  //   fetch(`/users/${id}`, {
  //     method: 'PATCH',
  //     headers: new Headers({ "content-type": "application/json" }),
  //     body: JSON.stringify(updatedUser),
  //   })
  // }
  // console.log(userLogged)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append('username', username)
    formData.append('image', image)
    console.log('form data ->', formData);

    fetch(`/users/${userLogged?.id}`, {
      method: "PATCH",
      body: formData
    }).then(r => r.json())
      .then(r => console.log(r))
    setUpdated(true)
  }

  const tripInfo = userTrips.map(trip => console.log(trip.trip)
  )

  return (
    <>
      <div> Welcome { userLogged?.username } </div>
      <Button variant='contained' onClick={ handleShow }>
        Edit Profile
      </Button>
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
    </>
  )
}

export default Profile;