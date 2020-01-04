import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import JoinPage from './pages/JoinPage';
import GamePage from './pages/GamePage';

import './App.css';

function App() {
    return (
        <Router>
            <Route path="/" exact component={JoinPage}  />
            <Route path="/game" component={GamePage}  />
        </Router>
    );
}

export default App;
