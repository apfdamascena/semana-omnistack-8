import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

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

    async function handleLike(userID) {
        await API.post(`/dev/${userID}/likes`, null, {
            headers: { user: match.params.id }
        })

        setUsers(users.filter(user => user._id != userID));
    }

    async function handleDislike(userID) {
        await API.post(`/dev/${userID}/dislikes`, null, {
            headers: { user: match.params.id }
        })

        setUsers(users.filter(user => user._id != userID));
    }

    return (
        <div className="mainContainer">

            <Link to = "/">
                <img src={logo} alt="Tindev Logo" />
            </Link>

            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="likeOrDislikeButtons">
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="like" />
                                </button>
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="dislike" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                    <div className="emptyUsers">
                        Acabou! Nao há mais usuarios por perto!
                    </div>
                )
            }

        </div>
    );
}