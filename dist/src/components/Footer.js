import React from 'react'
import fbWhite from '../assets/social/facebook-white.svg'
import twitterWhite from '../assets/social/twitter-white.svg'
import instagramWhite from '../assets/social/instagram-white.svg'
import appleStore from '../assets/store/app-store.svg'
import playStore from '../assets/store/play-store.svg'
import windowsStore from '../assets/store/windows-store.svg'


const Footer = (props) => {


    return (
        <div className="footer-container">
            <div className='footer'>
            <h4>Home | Terms and Conditions | Privary Policy | Collection Statement | Help | Manage Account</h4>
            <h6>Copyright © 2016 DEMO Strewaming All Rights Reserved.</h6>
            <div className='footer-icons'>
                <span className='footer-social-icons'>
                    <img src={fbWhite} alt='' />
                    <img src={twitterWhite} alt='' />
                    <img src={instagramWhite} alt='' />
                </span>
                <span className='footer-store-icons'>
                    <img src={appleStore} alt='' />
                    <img src={playStore} alt='' />
                    <img src={windowsStore} alt='' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer