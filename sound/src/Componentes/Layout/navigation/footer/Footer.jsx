import React from 'react';
import Contact from '../footer/Contact';
import Redes from '../footer/Redes';


const Footer= () => {

    
    return (
    
        <footer className='footer'>

            <div className='conteiner1'>
                <Contact/>              
            </div>

            <div className="conteiner2">
                <Redes/>
            </div>

        </footer>
    
    )
    };


export default Footer;