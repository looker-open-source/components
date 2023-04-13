

import { paddingDefaultsHelper } from './paddingDefaultsHelper';
describe('paddingDefaultsHelper', () => {
  test('p', () => {
    expect(paddingDefaultsHelper({
      p: 'small'
    }, {
      p: 'medium'
    })).toMatchInlineSnapshot({}, `
      Object {
        "p": "small",
      }
    `);
  });
  test('pl', () => {
    expect(paddingDefaultsHelper({
      pl: 'small'
    }, {
      p: 'medium'
    })).toMatchInlineSnapshot({}, `
      Object {
        "pl": "small",
        "pr": "medium",
        "py": "medium",
      }
    `);
  });
  test('py', () => {
    expect(paddingDefaultsHelper({
      py: 'small'
    }, {
      px: 'medium'
    })).toMatchInlineSnapshot({}, `
      Object {
        "px": "medium",
        "py": "small",
      }
    `);
  });
  test('pl vs px', () => {
    expect(paddingDefaultsHelper({
      pl: 'small'
    }, {
      px: 'medium'
    })).toMatchInlineSnapshot({}, `
      Object {
        "pl": "small",
        "pr": "medium",
      }
    `);
  });
  test('none', () => {
    expect(paddingDefaultsHelper({}, {
      p: 'medium'
    })).toMatchInlineSnapshot({}, `
      Object {
        "p": "medium",
      }
    `);
  });
  test('no defaults', () => {
    expect(paddingDefaultsHelper({
      pl: 'medium',
      px: 'small'
    }, {})).toMatchInlineSnapshot({}, `
      Object {
        "pl": "medium",
        "pr": "small",
      }
    `);
  });
  test('compass points', () => {
    expect(paddingDefaultsHelper({
      pb: 'xsmall',
      pl: 'small',
      pr: 'medium',
      pt: 'large',
      px: 'xlarge'
    }, {
      p: 'xxlarge'
    })).toMatchInlineSnapshot({}, `
      Object {
        "pb": "xsmall",
        "pl": "small",
        "pr": "medium",
        "pt": "large",
      }
    `);
  });
});
//# sourceMappingURL=paddingDefaultsHelper.spec.js.map