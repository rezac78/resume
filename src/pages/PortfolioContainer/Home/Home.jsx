import React from 'react'
import Header from '../Home/Header/Header.jsx';
import Profile from '../Home/Profile/Profile.jsx';
import Footer from '../Home/Footer/Footer.jsx';

const Home = ({Profiles, setTeam, getTeam}) => {
  return (
    <div className={getTeam ? "home-container-Dark" : "home-container"}>
      <Header setTeam={setTeam} getTeam={getTeam} />
      {Profiles?.map((profile) => {
        return <Profile getTeam={getTeam} key={profile.id} Titel={profile.littleSamaritan} ProfileImg={profile.profileImage.url} Resume={profile.resumepdfEn.url} />
      })}
      <Footer getTeam={getTeam} />
    </div>
  )
}

export default Home;