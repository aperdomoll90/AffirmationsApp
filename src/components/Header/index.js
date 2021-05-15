import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../../App'
import { Button, Navbar } from 'react-bootstrap'
import LoginButton from './LoginButton'
import PostNew from '../PostNew'

function Header() {
  const { user } = useContext(UserAuthContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Navbar className="nav">
        <div className="box-content">
          <h1>Sweet Affirmations</h1>
        </div>
        <div className="box-content">
          {user && (
            <Button
              className="navButton"
              variant="outline-success"
              onClick={() => setShowModal(true)}
            >
              Add
            </Button>
          )}
          <LoginButton />
        </div>
      </Navbar>
      <PostNew show={showModal} onHide={() => setShowModal(false)} />
    </>
  )
}

export default Header
