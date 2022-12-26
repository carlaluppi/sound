import React from 'react';

import Twitter from '../../../../images/twitter.svg';
import Facebook from '../../../../images/facebook.svg';


const Redes= () => {

    
    return (
    
        <div className='redes'>
    
            <ul>
                <li>
                <a href="https://twitter.com/"><img src={Twitter} alt="twitter" />
            Twitter
            </a>
                </li>
            <li>            
                <a href="https://www.facebook.com/"><img src={Facebook} alt="facebook" />
                Facebook
                </a>
            </li>
            </ul>
        
        </div>
    )
    };


export default Redes;