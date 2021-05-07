import React, { useContext, useState } from 'react'
// import { ModalBody } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { UserAuthContext, AffirmationsContext } from '../../App'

function PostNew(props) {
  const [newText, setNewText] = useState('')
  const { user } = useContext(UserAuthContext)
  const {setAffirmationsList} = useContext(AffirmationsContext)

  const handleSubmit = () => {
    const newAffirmation = {
      text: newText,
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    }
    fetch('https://afirmap-api.web.app/affirmations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAffirmation),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewText('')
        props.onHide()
        setAffirmationsList(data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Title>Post an Affirmation</Modal.Title>
      <Modal.Body>
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows="6"
          cols="90"
          placeholder="Inspire    Soothe     Heal"
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => handleSubmit()}>Save</button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostNew
