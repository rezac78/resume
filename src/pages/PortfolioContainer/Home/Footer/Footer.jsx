import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-parent">
                <Image src={require('../../../assets/Home/shape-bg.png')} alt='no internet connection'/>
        </div>
    </div>
  )
}