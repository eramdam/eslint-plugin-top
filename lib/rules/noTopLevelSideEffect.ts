import {Rule} from 'eslint';
import {isTopLevel} from '../helpers';

export const noTopLevelSideEffect: Rule.RuleModule = {
  meta: {
    type: 'problem',
    messages: {
      message: 'Side effects in toplevel are not allowed.'
    }
  },
  create: (context) => {
    return {
      ExpressionStatement: (node) => {
        if (isTopLevel(node)) {
          const isIIFE = Boolean(
            node.expression.type === 'CallExpression' &&
              node.expression.callee &&
              (node.expression.callee.type === 'ArrowFunctionExpression' ||
                node.expression.callee.type === 'FunctionExpression')
          );

          if (!isIIFE) {
            context.report({
              node,
              messageId: 'message'
            });
          }
        }
      },
      IfStatement: (node) => {
        if (isTopLevel(node)) {
          context.report({
            node,
            messageId: 'message'
          });
        }
      },
      ForStatement: (node) => {
        if (isTopLevel(node)) {
          context.report({
            node,
            messageId: 'message'
          });
        }
      },
      WhileStatement: (node) => {
        if (isTopLevel(node)) {
          context.report({
            node,
            messageId: 'message'
          });
        }
      },
      SwitchStatement: (node) => {
        if (isTopLevel(node)) {
          context.report({
            node,
            messageId: 'message'
          });
        }
      }
    };
  }
};
