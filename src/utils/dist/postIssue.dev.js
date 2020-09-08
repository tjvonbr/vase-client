"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postIssue = postIssue;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiURL = process.env.REACT_APP_API_URL;
var token = window.localStorage.getItem('token');

function postIssue(issue) {
  console.log("...Posting");

  _axios["default"].post("".concat(apiURL, "/issues"), issue, {
    headers: {
      Authorization: token
    }
  }).then(function (response) {
    if (response.status === 201) {
      return response.data;
    } else {
      return Promise.reject("Sorry, but we couldn't add the issue!");
    }
  })["catch"](function (err) {
    return console.log(err);
  });
}