import * as parser from '@typescript-eslint/parser';
import {RuleTester} from 'eslint';
import {noTopLevelVariables} from '../lib/rules/noTopLevelVariables';

const valid: RuleTester.ValidTestCase[] = [
  {
    code: `
      export default function () {
        var foo = 'bar';
      }
    `
  },
  {
    code: `
      export default function () {
        let foo = 'bar';
      }
    `
  },
  {
    code: `
      export default function () {
        const foo = 'bar';
      }
    `
  },
  {
    code: `
      const foo = 'bar';
      export default function () {
      }
    `,
    options: [
      {
        kind: ['var']
      }
    ]
  }
];

const invalid: RuleTester.InvalidTestCase[] = [
  {
    code: `
      var foo = 'bar';
      export default function () {}
    `,
    errors: [
      {
        messageId: 'message'
      }
    ]
  },
  {
    code: `
      let foo = 'bar';
      export default function () {}
    `,
    errors: [
      {
        messageId: 'message'
      }
    ]
  },
  {
    code: `
      var foobar = 'bar';
      const foo = 'bar';
      export default function () {}
    `,
    options: [
      {
        kind: ['var']
      }
    ],
    errors: [
      {
        messageId: 'message'
      }
    ]
  }
];

new RuleTester({
  parser,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    env: {
      es6: true
    }
  }
}).run('no-top-level-variables', noTopLevelVariables, {
  valid: valid.map((c) => {
    return {
      ...c,
      code: c.code.trim()
    };
  }),
  invalid: invalid.map((c) => {
    return {
      ...c,
      code: c.code.trim()
    };
  })
});
