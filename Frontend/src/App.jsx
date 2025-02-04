import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Course from './components/Course'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { useAuth } from './context/AuthProvider'
import Courses from './courses/Courses'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className='dark:text-white dark:bg-slate-900'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to={"/signup"} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>



    </div>
  )
}

export default App