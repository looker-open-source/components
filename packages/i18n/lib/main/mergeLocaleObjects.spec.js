"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _es = _interopRequireDefault(require("date-fns/locale/es"));
var _mergeLocaleObjects = require("./mergeLocaleObjects");

var locale1 = {
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace1: {
        TestKey: 'Test Value'
      }
    }
  }
};
var locale2 = {
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace2: {
        TestKey2: 'Test Value 2'
      }
    }
  }
};
var localeWithDate = {
  dateLocale: _es["default"],
  locale: 'es-ES',
  resources: {
    'es-ES': {
      NameSpace4: {
        TestKey3: 'Test Value 3'
      }
    }
  }
};
test('it merges locales with no dateLocale', function () {
  var result = (0, _mergeLocaleObjects.mergeLocaleObjects)([locale1, locale2], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  });
  expect(result).toMatchInlineSnapshot("\n    Object {\n      \"locale\": \"es-ES\",\n      \"resources\": Object {\n        \"es-ES\": Object {\n          \"NameSpace1\": Object {\n            \"TestKey\": \"Test Value\",\n          },\n          \"NameSpace2\": Object {\n            \"TestKey2\": \"Test Value 2\",\n          },\n          \"NameSpace3\": Object {\n            \"TestKeyCurrent\": \"Test Value Current\",\n          },\n        },\n      },\n    }\n  ");
});
test('it merges locales with possible dateLocale', function () {
  var result = (0, _mergeLocaleObjects.mergeLocaleObjects)([localeWithDate, locale1], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  });
  expect(result).toMatchObject({
    dateLocale: _es["default"],
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
test('it uses the current dateLocale', function () {
  var result = (0, _mergeLocaleObjects.mergeLocaleObjects)([locale1, locale2], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  }, _es["default"]);
  expect(result).toMatchObject({
    dateLocale: _es["default"],
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
test('it uses the current everything if locales array is empty', function () {
  var result = (0, _mergeLocaleObjects.mergeLocaleObjects)([], 'es-ES', {
    NameSpace3: {
      TestKeyCurrent: 'Test Value Current'
    }
  });
  expect(result).toMatchInlineSnapshot("\n    Object {\n      \"locale\": \"es-ES\",\n      \"resources\": Object {\n        \"es-ES\": Object {\n          \"NameSpace3\": Object {\n            \"TestKeyCurrent\": \"Test Value Current\",\n          },\n        },\n      },\n    }\n  ");
});
//# sourceMappingURL=mergeLocaleObjects.spec.js.map