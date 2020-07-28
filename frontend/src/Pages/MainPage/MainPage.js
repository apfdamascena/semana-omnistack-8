import React from 'react';
import './MainPage.css';

export default function MainPage({match}){
    return(
        <h2>{match.params.id}</h2>
    );
}