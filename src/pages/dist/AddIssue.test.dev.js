"use strict";

var _postIssue = require("../utils/postIssue");

jest.mock('../utils/postIssue'); // Expects correct response shape of a newly created post

describe('post a new issue', function () {
  it('successfully adds an issue', function _callee() {
    var issueBody;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            issueBody = {
              title: "This is the issue's title!",
              description: "This is the issue's description!",
              user_id: 1,
              zipcode: 60081
            };
            (0, _postIssue.postIssue)(issueBody).then(function (response) {
              expect(response.data).toBe({
                title: issueBody.title,
                description: issueBody.description,
                zipcode: issueBody.zipcode,
                upvotes: 0,
                user_id: issueBody.user_id,
                resolved: 0,
                resolutions: 0
              });
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // Expects failure message upon unsuccessful post creation

  it('fails to post an issue', function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
}); // Use object below as mock post body
// <AddIssue /> component successfully adds an issue