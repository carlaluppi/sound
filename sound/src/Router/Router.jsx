import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Page1 from '../Componentes/Pages/Page1';
import Page2 from '../Componentes/Pages/Page2';



const Router= () => { 
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Page1></Page1>}/>
            <Route path="/discover" element= {<h1>prueba1</h1>}/>
            <Route path="/join" element= {<h1>prueba2</h1>}/>
        </Routes>
        </BrowserRouter>
    )

    }

export default Router;