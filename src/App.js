import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRule from './components/CreateRule';
import EvaluateRule from './components/EvaluateRule';
import RuleList from './components/RuleList';

function App() {
    return (
        <Router>
            <div>
                <h1>Rule Engine</h1>
                <Routes>
                    <Route path="/create-rule" element={<CreateRule />} />
                    <Route path="/evaluate-rule" element={<EvaluateRule />} />
                    <Route path="/rules" element={<RuleList />} />
                    <Route path="/" element={<RuleList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
