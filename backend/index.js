const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createRule } = require('./ruleParser');
const Rule = require('./models/rule');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ruleEngine', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API to create a new rule
app.post('/api/rules', async (req, res) => {
    const { ruleString } = req.body;

    try {
        // Save rule to MongoDB
        const newRule = new Rule({ ruleString });
        await newRule.save();
        res.status(201).send({ message: 'Rule created', rule: newRule });
    } catch (error) {
        res.status(500).send({ message: 'Error creating rule', error });
    }
});

// API to evaluate a rule based on user data
app.post('/api/evaluate', async (req, res) => {
    const { ruleId, data } = req.body;

    try {
        const rule = await Rule.findById(ruleId);
        if (!rule) {
            return res.status(404).send({ message: 'Rule not found' });
        }

        const ast = createRule(rule.ruleString);
        const result = ast.evaluate(data);
        res.send({ result });
    } catch (error) {
        res.status(500).send({ message: 'Error evaluating rule', error });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
