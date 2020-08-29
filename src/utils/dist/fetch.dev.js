"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = client;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var apiURL = process.env.VASE_APP_API_URL;

function client(endpoint) {
  var _ref,
      data,
      token,
      customHeaders,
      customConfig,
      config,
      _args2 = arguments;

  return regeneratorRuntime.async(function client$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, data = _ref.data, token = _ref.token, customHeaders = _ref.headers, customConfig = _objectWithoutProperties(_ref, ["data", "token", "headers"]);
          config = _objectSpread({
            method: data ? 'post' : 'get',
            body: data ? JSON.stringify(data) : undefined,
            headers: _objectSpread({
              Authorization: token ? "Bearer ".concat(token) : undefined,
              'Content-Type': data ? 'application/json' : undefined
            }, customHeaders)
          }, customConfig);
          return _context2.abrupt("return", (0, _axios["default"])("".concat(apiURL, "/").concat(endpoint), config).then(function _callee(response) {
            var data;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(response.status === 400)) {
                      _context.next = 3;
                      break;
                    }

                    console.log("Help!");
                    return _context.abrupt("return", Promise.reject({
                      message: 'Please re-authenticate.'
                    }));

                  case 3:
                    _context.next = 5;
                    return regeneratorRuntime.awrap(response);

                  case 5:
                    data = _context.sent;

                    if (!response.ok) {
                      _context.next = 10;
                      break;
                    }

                    return _context.abrupt("return", data);

                  case 10:
                    return _context.abrupt("return", Promise.reject(data));

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}