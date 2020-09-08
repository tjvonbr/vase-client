import { postIssue } from '../utils/postIssue';

jest.mock('../utils/postIssue')

// Expects correct response shape of a newly created post
describe('post a new issue', () => {
  it('successfully adds an issue', async () => {
    const issueBody = {
      title: "This is the issue's title!",
      description: "This is the issue's description!",
      user_id: 1,
      zipcode: 60081
    }
    
    postIssue(issueBody).then(response => {
      expect(response.data).toBe({
        title: issueBody.title,
        description: issueBody.description,
        zipcode: issueBody.zipcode,
        upvotes: 0,
        user_id: issueBody.user_id,
        resolved: 0,
        resolutions: 0
      })
    })
  })

  // Expects failure message upon unsuccessful post creation
  it('fails to post an issue', async () => {

  })
})
// Use object below as mock post body

// <AddIssue /> component successfully adds an issue
