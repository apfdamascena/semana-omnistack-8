import React, { useEffect, useState } from 'react';
import './MainPage.css';

import API from '../../Services/api';

import logo from '../../Images/logo.svg';
import like from '../../Images/like.svg';
import dislike from '../../Images/dislike.svg';


export default function MainPage({ match }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await API.get('/dev', {
                headers: {
                    user: match.params.id,
                }
            })
            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id])

    return (
        <div className="mainContainer">
            <img src={logo} alt="Tindev Logo" />
            <ul>
                {users.map(user => (
                    <li>
                        <img src= {user.avatar} alt = {user.name}/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="likeOrDislikeButtons">
                            <button type="button">
                                <img src={like} alt="like" />
                            </button>
                            <button type="button">
                                <img src={dislike} alt="dislike" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}