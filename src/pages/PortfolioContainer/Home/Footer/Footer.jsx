import React from 'react'
import Image from 'next/image'

export default function Footer({getTeam}) {
  return (
    <div className="footer-container">
        <div className="footer-parent">
          {getTeam ? <Image src={require('../../../assets/Home/shape-bg.png')} alt='no internet connection'/> : <Image src={require('../../../assets/Home/shape-bg-Dark.png')} alt='no internet connection'/> }
                
        </div>
    </div>
  )
}