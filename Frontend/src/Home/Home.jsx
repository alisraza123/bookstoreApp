import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Login from '../Components/Login';
import FreeBook from '../components/Freebook';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Login /> {/* Render the Login component */}
      <Footer />
    </>
  );
}

export default Home