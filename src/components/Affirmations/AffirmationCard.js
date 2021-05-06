import React from 'react'
import {Card,Image} from 'react-bootstrap'

function AffirmationCard({affirmation}){
    return (
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="text-center">
          {affirmation.text}</Card.Title>
        <Card.Text className="align-right">
          {affirmation.displayName}
          {/* <Image src={affirmation.photoUrl} roundedCircle /> */}
          <Image src=" https://toppng.com/public/uploads/thumbnail/free-png-circle-frame-png-images-transparent-circle-frame-png-transparent-11563014580kkwxcmg73q.png" roundedCircle />
         
        </Card.Text>
      </Card.Body>
    </Card>
   
)}

export default AffirmationCard