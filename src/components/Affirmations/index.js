import React,{ useEffect, useState } from 'react'
import { CardColumns} from 'react-bootstrap'
import AffirmationCard from './AffirmationCard'

function Affirmations(){
    const [affirmationsList, setAffirmationsList]=useState(null)
  useEffect(()=>{
      fetch('https://afirmap-api.web.app/affirmations')
      .then(response => response.json())
      .then(data => setAffirmationsList(data))
      .catch(err =>console.log(err))
  },[])

    return (
    <CardColumns>
 {!affirmationsList ? <h2>Philosophizing....</h2> : affirmationsList.map(one=>{
 return <AffirmationCard key={affirmationsList.displayName} affirmation={one}/>

 })}
    </CardColumns>
    
    )
}

export default Affirmations