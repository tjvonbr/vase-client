"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLogin = postLogin;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function postLogin(creds) {
  return _axios["default"].post('http://localhost:4000/auth/login', creds).then(function (response) {
    return console.log(response);
  })["catch"](function (err) {
    return console.log(err);
  });
}

;