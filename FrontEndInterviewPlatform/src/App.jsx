import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ManageUsers from './AdminPanel'
import './App.css'
import { AddingUsers } from './AddingUsers'

function App() {
 

  return (
    <>
   <div>
    <h1>"Hello Nigga"</h1>
    <br/>
    <br/>
    <AddingUsers/>
    <br/>
    <br/>
    <ManageUsers/>
   </div>
    </>
  )
}

export default App
