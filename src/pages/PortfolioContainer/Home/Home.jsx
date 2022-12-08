import React from 'react'
import Header from '../Home/Header/Header.jsx';
import Profile from '../Home/Profile/Profile.jsx';
import Footer from '../Home/Footer/Footer.jsx';

const Home = ({Profiles}) => {
  return (
    <div className="home-container">
      <Header />
      {Profiles?.map((profile) => {
        return <Profile key={profile.id} Titel={profile.littleSamaritan} ProfileImg={profile.profileImage.url} Resume={profile.resumepdfEn.url} />
      })}
      <Footer />
    </div>
  )
}

export default Home;