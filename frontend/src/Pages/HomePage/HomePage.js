import React from 'react';
import tindevLogo from '../../Images/logo.svg';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="loginContainer">
            <form>
                <img src={tindevLogo} alt="Tindev Logo" />
                <input
                    required
                    placeholder = "Write your GitHub"
                />
                <button type = "submit">Send</button>
            </form>
        </div>
    );
}