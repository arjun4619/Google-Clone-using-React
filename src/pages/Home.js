import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import googlelogo from '../googlelogo.png'
import Search from '../components/Search';

function Home() {
    return (
        <div className='home'>
            {/* Header */}
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>
                        About
                    </Link>
                    <Link to='/store'>
                        Store
                    </Link>
                </div>

                <div className='home__headerRight'>
                    <Link to='/gmail'>
                        Gmail
                    </Link>
                    <Link to='/images'>
                        Images
                    </Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            {/* Body */}
            <div className='home__body'>
                <img src={googlelogo} />

                <div className='home__inputContainer'>
                    {/* Search */}
                    <Search />
                </div>

                <div className='languages'>
                    <p>Google offered in:</p>
                    <ul>
                        <li>हिन्दी</li>
                        <li>বাংলা</li>
                        <li>తెలుగు</li>
                        <li>मराठी</li>
                        <li>தமிழ்</li>
                        <li>ಕನ್ನಡ</li>
                        <li>മലയാളം</li>
                        <li>ਪੰਜਾਬੀ</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
