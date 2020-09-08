"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postIssue = postIssue;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiURL = process.env.REACT_APP_API_URL;

function postIssue(issue) {
  return _axios["default"].post("".concat(apiURL, "/issues"), issue).then(function (response) {
    if (response.status === 201) {
      return response.data;
    } else {
      return Promise.reject("Sorry, but we couldn't add the issue!");
    }
  });
}