import React, { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header/'
import Affirmations from './components/Affirmations/'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export const UserAuthContext = createContext(null)
export const AffirmationsContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [affirmationsList, setAffirmationsList] = useState(null)
  return (
    <AffirmationsContext.Provider value={{ affirmationsList, setAffirmationsList }}>
      <UserAuthContext.Provider value={{ user, setUser }}>
        <section className="App">
          <header>
            <Header />
          </header>
          <main>
            <Affirmations />
          </main>
          <footer>
            <Footer />
          </footer>
        </section>
      </UserAuthContext.Provider>
    </AffirmationsContext.Provider>
  )
}

export default App
