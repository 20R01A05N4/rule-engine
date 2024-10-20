import React, { useState } from 'react';
import { evaluateRule } from '../services/ruleService';

const EvaluateRule = () => {
    const [ruleId, setRuleId] = useState('');
    const [formData, setFormData] = useState({
        age: '',
        department: '',
        salary: '',
        experience: '',
    });
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await evaluateRule(ruleId, formData);
            setResult(response.data.result);
        } catch (error) {
            setResult('Error evaluating rule');
        }
    };

    return (
        <div>
            <h2>Evaluate a Rule</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="ruleId"
                    value={ruleId}
                    onChange={(e) => setRuleId(e.target.value)}
                    placeholder="Rule ID"
                />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                />
                <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="Department"
                />
                <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="Salary"
                />
                <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Experience"
                />
                <button type="submit">Evaluate Rule</button>
            </form>
            {result !== null && <p>Result: {result ? 'True' : 'False'}</p>}
        </div>
    );
};

export default EvaluateRule;
