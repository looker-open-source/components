

import dateLocale from 'date-fns/locale/es';
import { mergeLocaleObjects } from './mergeLocaleObjects';
const locale1 = {
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace1: {
        TestKey: 'Test Value'
      }
    }
  }
};
const locale2 = {
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace2: {
        TestKey2: 'Test Value 2'
      }
    }
  }
};
const localeWithDate = {
  dateLocale,
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace4: {
        TestKey3: 'Test Value 3'
      }
    }
  }
};
test('it merges locales with no dateLocale', () => {
  const result = mergeLocaleObjects([locale1, locale2], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  });
  expect(result).toMatchInlineSnapshot(`
    Object {
      "locale": "es-ES",
      "resources": Object {
        "es-ES": Object {
          "NameSpace1": Object {
            "TestKey": "Test Value",
          },
          "NameSpace2": Object {
            "TestKey2": "Test Value 2",
          },
          "NameSpace3": Object {
            "TestKeyCurrent": "Test Value Current",
          },
        },
      },
    }
  `);
});
test('it merges locales with possible dateLocale', () => {
  const result = mergeLocaleObjects([localeWithDate, locale1], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  });
  expect(result).toMatchObject({
    dateLocale,
    locale: 'es-ES',
    resources: {
      'es-ES': {
        NameSpace1: {
          TestKey: 'Test Value'
        },
        NameSpace3: {
          TestKeyCurrent: 'Test Value Current'
        },
        NameSpace4: {
          TestKey3: 'Test Value 3'
        }
      }
    }
  });
});
test('it uses the current dateLocale', () => {
  const result = mergeLocaleObjects([locale1, locale2], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  }, dateLocale);
  expect(result).toMatchObject({
    dateLocale,
    locale: 'es-ES',
    resources: {
      'es-ES': {
        NameSpace1: {
          TestKey: 'Test Value'
        },
        NameSpace2: {
          TestKey2: 'Test Value 2'
        },
        NameSpace3: {
          TestKeyCurrent: 'Test Value Current'
        }
      }
    }
  });
});
test('it uses the current everything if locales array is empty', () => {
  const result = mergeLocaleObjects([], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  });
  expect(result).toMatchInlineSnapshot(`
    Object {
      "locale": "es-ES",
      "resources": Object {
        "es-ES": Object {
          "NameSpace3": Object {
            "TestKeyCurrent": "Test Value Current",
          },
        },
      },
    }
  `);
});
//# sourceMappingURL=mergeLocaleObjects.spec.js.map