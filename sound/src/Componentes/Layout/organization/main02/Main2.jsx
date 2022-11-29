import React from 'react';

import Imgx4 from '../Atomos/Imgx4';
import Charts from '../.././images/microphone.svg';
import Albums from '../.././images/albums.svg';
import More from '../.././images/more.svg';

const Main = () => {

    
    return (
    
        <main className="conteinerMain">

            <div className="conteinerTexto">
                <div className="texto2">
                    <h1> Discover new music </h1>
                </div>

                <div className='conteinerBotones'>

                    <div className='bot1'>
                        <a href=""> <img className="imgbot1" src= {Charts} alt="charts"/>    </a>     
                        <span>  Charts</span>
                    </div>

                    <div className="bot1">
                        <a href=""> <img className="imgbot1" src= {Albums} alt="albums"/>    </a>             
                        <span>  Albums</span>
                    </div>

                    <div className="bot1">
                        <a href=""> <img className="imgbot1" src= {More} alt="more"/>    </a>             
                        <span>  More</span>
                    </div>

                </div>
                
                <div className="parra">
                    <p>By joining you can benefit by listening to the latest albums released.</p>
                </div>  

            </div>
            

            <div className='imgx4'>
                <Imgx4></Imgx4>
            </div>     

        </main>
    
    )
    };

;
export default Main;