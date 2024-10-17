import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Outlet } from 'react-router-dom'

function App() {
   return 
   <>
   <h1> Test </h1>
   </>
}
export default App