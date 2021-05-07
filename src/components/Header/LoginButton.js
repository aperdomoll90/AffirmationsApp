import React, { useContext } from 'react'
import firebase from 'firebase'
import {UserAuthContext} from '../../App'
import {Button} from 'react-bootstrap'

firebase.initializeApp({
  apiKey: 'AIzaSyB3lSgLFW6Ljr8xa-X30oAY7EvkXyFrgLw',
  authDomain: 'afirmap-fc6fa.firebaseapp.com',
  projectId: 'afirmap-fc6fa',
  storageBucket: 'afirmap-fc6fa.appspot.com',
  messagingSenderId: '475290774969',
  appId: '1:475290774969:web:5cea9f0d8edcd6d5785a68',
})

function LoginButton() {
  const {user, setUser} = useContext(UserAuthContext)
  // use the higher order component by importing it and destructing it
  //import {UserAuthContext} from '../../App'
  // const [user, setUser]=useState(null)
  const clickHandler = () => {
    if (user) {
      setUser(null)
    } else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => setUser(res.user))
        .catch((err) => alert(err))
    }
  }
  return <Button className="navButton" variant="outline-success" onClick={() => clickHandler()}>Login</Button>
}

export default LoginButton
