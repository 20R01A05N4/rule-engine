import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Backend URL

// Function to create a new rule
export const createRule = (ruleString) => {
    return axios.post(`${API_URL}/rules`, { ruleString });
};

// Function to evaluate a rule with user data
export const evaluateRule = (ruleId, data) => {
    return axios.post(`${API_URL}/evaluate`, { ruleId, data });
};

// Function to fetch all rules
export const getRules = () => {
    return axios.get(`${API_URL}/rules`);
};
