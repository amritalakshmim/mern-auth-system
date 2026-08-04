// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
 import { ToastContainer } from 'react-toastify';
import { useContext } from 'react'
import { AppContent } from './context/AppContext'
import Spinner from './components/Spinner'

const App = () => {
  const {loading} = useContext(AppContent)

  if(loading) {
    return <Spinner />
  }
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/email-verify' element={<EmailVerify />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
      </Routes>
    </div>
  )
}

export default App