import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './JoinPage.css';

const JoinPage = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState(''); // Every single game is room
    // TODO: get active rooms to display and to check if a roomname is already in use

    return (
        <div className="container">
            {/* TODO: Login form to enter username and game id */}
            <div className="form-container">
                <form>
                    <h1>Join A Game</h1>
                    <span>Enter a username and a game ID below.</span>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        placeholder="Game ID"
                    />
                    <Link>Join Game</Link>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel">
                        <h1>Live Games:</h1>
                        <p>To join an active game select one below.</p>
                        <button className="ghost">#game1</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinPage;
