function postIssue(issue) {
    console.log("...mocking posting")
    return Promise.resolve({
      title: issue.title,
      description: issue.description,
      zipcode: issue.zipcode,
      upvotes: 0,
      user_id: issue.user_id,
      resolved: 0,
      resolutions: 0
    })
  }
  
  export { postIssue }