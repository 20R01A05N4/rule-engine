const mongoose = require('mongoose');

// Define the rule schema
const ruleSchema = new mongoose.Schema({
    ruleString: { type: String, required: true },  // Store the rule as a string
    createdAt: { type: Date, default: Date.now },
});

const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;
