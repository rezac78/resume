import React from 'react'
import Header from '../Home/Header/Header.jsx';
import Profile from '../Home/Profile/Profile.jsx';
import Footer from '../Home/Footer/Footer.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  )
}

export default Home;