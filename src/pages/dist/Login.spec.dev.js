"use strict";

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _Login = _interopRequireDefault(require("./Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock('axios');
describe('LoginHandler', function () {
  it("successfully returns user creds", function _callee() {
    var loginData;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loginData = {
              id: 1,
              username: "tjvonbr",
              email: "tjvonbr@gmail.com",
              firstName: "Trevor",
              lastName: "Von Bruenchenhein"
            };

            _axios["default"].get.mockImplementation(function () {
              return Promise.resolve(loginData);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it("fails to return user creds", function _callee2() {
    var errorMessage;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            errorMessage = "Network Error";

            _axios["default"].get.mockImplementation(function () {
              return Promise.reject(new Error(errorMessage));
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});
test('logs in user', function () {
  console.log(jest.spyOn(_Login["default"], 'loginHandler'));
});