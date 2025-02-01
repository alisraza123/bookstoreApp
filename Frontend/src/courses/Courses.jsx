import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>

    </div>
    <Footer/>
    </>
  )
}

export default Courses