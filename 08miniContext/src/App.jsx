import { useState } from 'react'
import './App.css'
import UserContext from './context/userContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
     <h1>React with coffee</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
