import React, { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header/'
import Affirmations from './components/Affirmations/'

// import GridFlexPractice from './components/Practice'

import 'bootstrap/dist/css/bootstrap.min.css'

export const UserAuthContext = createContext(null)
// use hook to create context in the parent aun use it to wrap a Higher order component

export const AffirmationsContext = createContext(null)


function App() {
  const [user, setUser] = useState(null)
  const [affirmationsList, setAffirmationsList]=useState(null)
  return (
    <AffirmationsContext.Provider value={{affirmationsList,setAffirmationsList}}>
    <UserAuthContext.Provider value={{ user, setUser }}>
      {/* use that context and make it available globally to be used in child */}
      <section class="App">
        <header>
          <section id="headGrid">
            <Header />
          </section>
        </header>

        <main>
          <section id="grid">
            <Affirmations />
          </section>
        </main>

        {/* <GridFlexPractice/> */}
      </section>
    </UserAuthContext.Provider>
    </AffirmationsContext.Provider>
  )
}

export default App
