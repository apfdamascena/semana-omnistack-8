import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MainPage from './Pages/MainPage/MainPage';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path = "/" exact component = {HomePage}/> 
            <Route path = "/dev/:id" component = {MainPage}/> 
        </BrowserRouter>
    );
}