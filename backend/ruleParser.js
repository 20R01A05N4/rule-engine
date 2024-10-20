const ASTNode = require('./astNodes');

// Parse conditions like 'age > 30'
function parseCondition(conditionStr) {
    const [attribute, operator, value] = conditionStr.split(' ');
    return new ASTNode('operand', null, null, { attribute, operator, value: parseInt(value, 10) });
}

// Parse rule strings and build the AST recursively
function createRule(ruleString) {
    ruleString = ruleString.trim();

    if (ruleString.includes(' AND ')) {
        const [leftPart, rightPart] = ruleString.split(' AND ');
        return new ASTNode('AND', createRule(leftPart), createRule(rightPart));
    } else if (ruleString.includes(' OR ')) {
        const [leftPart, rightPart] = ruleString.split(' OR ');
        return new ASTNode('OR', createRule(leftPart), createRule(rightPart));
    } else {
        // It's a basic condition
        return parseCondition(ruleString);
    }
}

module.exports = { createRule };
