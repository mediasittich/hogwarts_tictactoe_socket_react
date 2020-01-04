import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const GamePage = ({ location }) => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        const { username, room } = queryString.parse(location.search)

        socket = io(ENDPOINT);

        setUsername(username);
        setRoom(room);

        console.log(socket)
    }, [ENDPOINT, location.search]);
    
    return (
        <div>
            <ol>
                <li>players select their houses</li>
                <li>players can continue to game</li>
            </ol>
        </div>
    );
}

export default GamePage;
