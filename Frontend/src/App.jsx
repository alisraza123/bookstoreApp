import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Course from './components/Course'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='dark:text-white dark:bg-slate-900'>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/course" element={<Courses/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>



    </div>
  )
}

export default App