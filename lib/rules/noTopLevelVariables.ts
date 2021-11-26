import {Rule} from 'eslint';
import {isTopLevel} from '../helpers';

export const noTopLevelVariables: Rule.RuleModule = {
  meta: {
    type: 'problem',
    messages: {
      message: `Unexpected variable at the top level`
    }
  },
  create: (context) => {
    return {
      VariableDeclaration: (node) => {
        if (node.kind === 'const' || node.kind === 'let' || node.kind === 'var') {
          if (isTopLevel(node)) {
            context.report({node, messageId: 'message'});
          }
        }
      }
    };
  }
};
