import React, { useState } from 'react';
import { createRule } from '../services/ruleService';

const CreateRule = () => {
    const [ruleString, setRuleString] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createRule(ruleString);
            setMessage(`Rule created: ${response.data.rule.ruleString}`);
        } catch (error) {
            setMessage('Error creating rule');
        }
    };

    return (
        <div>
            <h2>Create a New Rule</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ruleString}
                    onChange={(e) => setRuleString(e.target.value)}
                    placeholder="Enter rule"
                />
                <button type="submit">Create Rule</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateRule;
