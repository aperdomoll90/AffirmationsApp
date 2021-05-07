import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../../App'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import LoginButton from './LoginButton'
import PostNew from '../PostNew'

function Header() {
  const { user } = useContext(UserAuthContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <section >
      <navbar className="nav">

        <div class="box-content">
          <h1>Sweet Affirmations</h1>
        </div>

        <div class="box-content">
        {user && (
          <Button className="navButton" variant="outline-success" onClick={() => setShowModal(true)}> + </Button>
        )}
        <LoginButton />
        </div>
      </navbar>
      <PostNew show={showModal} onHide={() => setShowModal(false)} />
      </section>
 </>
  )
}

export default Header
