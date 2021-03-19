import React from 'react';


const Header = (props) => {


    return (
        <div className='header-container'>
            <div className='header'>
                <h1>DEMO Streaming</h1>
                <div className="button-header-container">
                    <span>
                        <button className='header-button' id='button-log-in'>Log In</button>
                        <button className='header-button' id='button-trial'>Start your free trial</button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header