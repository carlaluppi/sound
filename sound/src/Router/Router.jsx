import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Page1 from '../Componentes/Pages/Page1';
import Page2 from '../Componentes/Pages/Page2';
import Page3 from '../Componentes/Pages/Page3';


const Router= () => { 
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Page1></Page1>}/>
            <Route path="/discover" element= {<Page2/>}/>
            <Route path="/join" element= {<Page3/>}/>
        </Routes>
        </BrowserRouter>
    )

    }

export default Router;