import React from 'react';
import logo from '../../../../images/logo.svg';
import {Link} from 'react-router-dom';

const Logo = () => {

    
    return (
    
        <div >
            <div className="logo"> 
                <Link to="/"> <img src= {logo} alt="logo"/>    </Link>             
                <span className='spanlogo'> Soundwave</span>
            </div>

        </div>
    
    )
    };


export default Logo;