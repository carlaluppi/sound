import React from 'react';
import {Link} from 'react-router-dom';
// importar el "link" de react dom para que me linkea 


const Boton = () => {

    
    return (
    
    <div className='botones'>
        <Link to="/discover">Discover</Link>
        <Link to="/join">Join</Link>
    </div>
    
    )
    };

;
export default Boton;