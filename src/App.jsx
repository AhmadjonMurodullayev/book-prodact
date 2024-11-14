import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/sing-in/sing-in'
import { SignUp } from './pages/sing-up/sing-up'
import MainLayout from './layout/main-layout'
import Home from './pages/home/home'

function App() {
  return (
  <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/main-layout' element={<MainLayout/>}>
        <Route index element={<Home/>} />
    </Route>
  </Routes>
  )
}

export default App