import React, {useState} from 'react' 
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyB3lSgLFW6Ljr8xa-X30oAY7EvkXyFrgLw",
    authDomain: "afirmap-fc6fa.firebaseapp.com",
    projectId: "afirmap-fc6fa",
    storageBucket: "afirmap-fc6fa.appspot.com",
    messagingSenderId: "475290774969",
    appId: "1:475290774969:web:5cea9f0d8edcd6d5785a68"
  })

function LoginButton(){
const [user, setUser]=useState(null)
const clickHandler =()=> {
    if(user) {
        setUser(null)
    } else {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(res=> setUser(res.user))
        .catch(err=> alert(err)
        )
    }
}
    return (
        <button onClick={()=>clickHandler()}>#</button>
    )
}

export default LoginButton