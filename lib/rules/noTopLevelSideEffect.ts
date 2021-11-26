import {Rule} from 'eslint';
import {isTopLevel} from '../helpers';

function sideEffect(context: Rule.RuleContext) {
  return (node: Rule.Node) => {
    if (isTopLevel(node)) {
      context.report({
        node,
        messageId: 'message'
      });
    }
  };
}

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

          const isModuleAssignment =
            node.expression.type === 'AssignmentExpression' &&
            node.expression.left.type === 'MemberExpression' &&
            node.expression.left.object.type === 'Identifier' &&
            node.expression.left.object.name === 'module';

          if (!isIIFE && !isModuleAssignment) {
            context.report({
              node,
              messageId: 'message'
            });
          }
        }
      },
      IfStatement: sideEffect(context),
      ForStatement: sideEffect(context),
      WhileStatement: sideEffect(context),
      SwitchStatement: sideEffect(context)
    };
  }
};
