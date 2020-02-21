import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join/Join.jsx'
import Chat from './components/Chat/Chat.jsx'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            {/* This one is NOT exact because we will pass some props to it */}
            <Route path="/chat" component={Chat} />
        </Router>
    )
}
export default App;