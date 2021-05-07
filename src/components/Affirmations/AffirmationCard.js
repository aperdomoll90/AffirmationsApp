import React from 'react'
import { Card, Image } from 'react-bootstrap'

function AffirmationCard({ affirmation }) {
  return (
    <div id="login-container">
      <div class="description">
        {affirmation.text}
        <footer className="cardFooter">
          <div class="profile-img">
            <Image roundedCircle
                src={affirmation.photoUrl}
                alt={affirmation.displayName}
              /></div>
              
          <h5> {affirmation.displayName} </h5>
        </footer>
      </div>
    </div>
  )
}

export default AffirmationCard
