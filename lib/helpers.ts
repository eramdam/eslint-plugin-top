import {Rule} from 'eslint';

export function isTopLevel(node: Rule.NodeParentExtension) {
  let scope = node.parent;
  while (scope.type === 'BlockStatement') {
    scope = scope.parent;
  }
  return scope.type === 'Program';
}
