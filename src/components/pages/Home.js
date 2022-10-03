import React from 'react';
import './Home.css';
import { GiPartyPopper } from 'react-icons/gi';
import { Link } from 'react-router-dom';




function Home() {
    return (
        <div className='container'>
            <style>{'body { background-color: #F6F2FF; }'}</style>
            <div className='container-title justify-content-center text-center'>
                <h1 className='title'>Imagine if</h1>
                <h1 className='snapchat'>Snapchat</h1>
                <h1 className='title2'>had events.</h1>
                <p className='description'>Easily host and share events with your friends</p>
                <p className='description'>across any social media.</p>
            </div>
            <img src="images/landingimage.jpeg" className="landingimage" />
            <Link to='create-event'><button className='create-event-btn'><b><GiPartyPopper />Create my event</b></button></Link>


        </div>

    );
}

export default Home;