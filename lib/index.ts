import {noTopLevelSideEffect} from './rules/noTopLevelSideEffect';
import {noTopLevelVariables} from './rules/noTopLevelVariables';

/**
 * @fileoverview Disallow side effects at the top level of files
 * @author Damien Erambert
 */

export const rules = {
  'no-top-level-variables': noTopLevelVariables,
  'no-top-level-side-effect': noTopLevelSideEffect
};
