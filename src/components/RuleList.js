import React, { useState, useEffect } from 'react';
import { getRules } from '../services/ruleService';

const RuleList = () => {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        async function fetchRules() {
            const response = await getRules();
            setRules(response.data.rules);
        }
        fetchRules();
    }, []);

    return (
        <div>
            <h2>All Rules</h2>
            <ul>
                {rules.map(rule => (
                    <li key={rule._id}>{rule.ruleString}</li>
                ))}
            </ul>
        </div>
    );
};

export default RuleList;
