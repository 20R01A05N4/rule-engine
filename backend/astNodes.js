class ASTNode {
    constructor(nodeType, left = null, right = null, value = null) {
        this.nodeType = nodeType;  // "operator" or "operand"
        this.left = left;          // Left child (another node)
        this.right = right;        // Right child (another node)
        this.value = value;        // Operand value for conditions
    }

    // Method to evaluate the AST based on input data
    evaluate(data) {np
        if (this.nodeType === 'operand') {
            const { attribute, operator, value } = this.value;
            if (operator === '>') return data[attribute] > value;
            if (operator === '<') return data[attribute] < value;
            if (operator === '=') return data[attribute] == value;
        } else if (this.nodeType === 'AND') {
            return this.left.evaluate(data) && this.right.evaluate(data);
        } else if (this.nodeType === 'OR') {
            return this.left.evaluate(data) || this.right.evaluate(data);
        }
    }
}

module.exports = ASTNode;
