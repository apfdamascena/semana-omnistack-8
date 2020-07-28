import React, {useState} from 'react';
import tindevLogo from '../../Images/logo.svg';
import './HomePage.css';

export default function HomePage({history}) {
    const [username, setUsername] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(username);

        history.push('/main');
    }

    return (
        <div className="loginContainer">
            <form onSubmit = {handleSubmit}>
                <img src={tindevLogo} alt="Tindev Logo" />
                <input
                    required
                    placeholder = "Write your GitHub"
                    value = {username}
                    onChange = { (event) => {setUsername(event.target.value)}}
                />
                <button type = "submit">Send</button>
            </form>
        </div>
    );
}