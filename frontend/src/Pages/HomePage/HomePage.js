import React, {useState} from 'react';
import tindevLogo from '../../Images/logo.svg';
import './HomePage.css';
import API from '../../Services/api.js';

export default function HomePage({history}) {
    const [username, setUsername] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        console.log(username);

        const response = await API.post('/dev', {
            username,
        }).catch((error) => {console.log(error);});

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
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