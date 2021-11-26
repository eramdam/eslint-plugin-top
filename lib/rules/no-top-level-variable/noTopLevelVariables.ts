import {Rule} from 'eslint';
import {isTopLevel} from '../../helpers';

export const noTopLevelVariables: Rule.RuleModule = {
  meta: {
    type: 'problem',
    messages: {
      message: `Unexpected variable at the top level`
    },
    schema: [
      {
        type: 'object',
        properties: {
          kind: {
            type: 'array',
            items: {
              enum: ['const', 'let', 'var']
            }
          }
        }
      }
    ]
  },
  create: (context) => {
    const options = context.options[0] || {};

    return {
      VariableDeclaration: (node) => {
        const defaultKindMatching = node.kind === 'const' || node.kind === 'let' || node.kind === 'var';
        const isMatching = options.kind ? Array.from(options.kind).includes(node.kind) : defaultKindMatching;

        if (isMatching) {
          if (isTopLevel(node)) {
            context.report({node, messageId: 'message'});
          }
        }
      }
    };
  }
};
