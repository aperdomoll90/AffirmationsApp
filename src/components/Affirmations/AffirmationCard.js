import React from 'react'

function AffirmationCard({ affirmation }) {
  return (
    <div id="Card">
      <div className="description">
        {affirmation.text}
        <footer className="cardFooter">
          <h5> {affirmation.displayName} </h5>
          <div className="imgContainer">
            <img className="imgSize" src={affirmation.photoUrl} alt={affirmation.displayName} />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AffirmationCard
