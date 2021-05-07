import React,{ useEffect, useState, useContext} from 'react'

import { CardColumns} from 'react-bootstrap'
import AffirmationCard from './AffirmationCard'
import { AffirmationsContext } from '../../App'

function Affirmations(){
  const {affirmationsList, setAffirmationsList} = useContext(AffirmationsContext)
  useEffect(()=>{
      fetch('https://afirmap-api.web.app/affirmations')
      .then(response => response.json())
      .then(data => setAffirmationsList(data))
      .catch(err =>console.log(err))
  },[])

    return (
      <section id="grid">
 {!affirmationsList 
 ? <h2>Philosophizing....</h2> 
 : affirmationsList.map(one=>{

 return <AffirmationCard key={affirmationsList.displayName} affirmation={one}/>

 })}
    </section>
    
    )
}

export default Affirmations