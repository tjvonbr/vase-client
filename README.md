# Vase

## Overview
Political engagement in the United States is an obviously complex phenomenon to study.  Because of our federalist structure, there are many levels of government that encourage our participation.  Some argue that our participation at the local level is more important and meaningful than at the state or national level while others argue the opposite.  In addition, there are many political 'acts' that might constitute political engagement.  For example, voting in an election would be considered a political act.  So would attending, and participating in, a poltical demonstation.  The Pew Research Center (PRC, hereafter) has conveniently polled Americans attempting to measure their levels of political engagement by asking if they've participated in any number of 11 acts (the study containing the list can be found [here](https://www.pewresearch.org/internet/2009/09/01/the-current-state-of-civic-engagement-in-america/)).

In short, PRC concluded that 34% of American adults engage in 1 or 2 of the included political acts.  The level of engagement nearly halves for 3 or 4 acts, again for 5 or 6 acts, and so on and so forth.  Most of the acts require some form of organization of a group of people.  For example, in order for a demonstation to be successful, someone or some group of people must effectively convince a significant number of people to show up at the correct location at the correct time, which isn't easy.  This brings us to the primary reason for Vase's existence.  We believe that if there were a technology that leverages the Web to bring people together and inspires them to *act* in a political sense.

We know what you're thinking.  We already have those technologies in Facebook and Twitter, and to an extent, we agree.  While we cannot argue with the fact that those two apps bring people together, we do argue that Facebook and Twitter encourage people to engage ideas, but not necessarily to act on behalf of any of them.  And we think most people would agree that we need more political action and less talking about it, and this is where Vase shines.

Vase is a social network that revolves around political action.  Every user, to varying degrees, joins to act in a political sense.  Facebook, on the other hand, is a more general social network, which we think is fine.   But if you wanted to organize a demonstration, you would have to filter through your friends to communicate the details of this demonstation.  If you have 1,000+ friends, only a small number of these friends are going to be interested.  You might end up posting something that 90%+ of your friends don't need to see.  And if you reverse the roles, and you're just scrolling through your news feed one evening, you might come across several (probably more) posts that don't catch your interest.  Long story short, Facebook has a very low signal/noise ratio (SNR), and we want to create a social network with a high signal/noise ratio.

In a sense, the application solves this by simply existing.  By bringing politicall-minded and engaged users to the app in the first place, we've already improved the SNR.  You don't have to worry about spamming your peers with political posts on this application because that is why people joined in the first place!

More importantly, however, we want to encourage political action.  Version 1.0 is going to focus on creating a list of community concerns that require attention by fellow citizens and local officials alike.  A more trivial example might be the need for a stoplight at a dangerous intersection in your community.  Sure, this issue might've surfaced at the bimonthly town hall meetings, but it's unlikely a significant number of citizens attended to provide their support, and an inaccurate representation of the community's concern for this issue is the result.

With Vase, one user needs to create a community concern detailing the problem, the location, etc., and other users in your community can then upvote that problem.  Instead of having to attend a town hall meeting, people can voice their concern with the click of a button.  Ideally, if several hundred people upvote the issue, it'll signify that the issue deserves some attention.  Ideally, yes, those several hundred citizens would attend the town hall meeting, but many people do not have time or have other obligations and cannot show up to a meeting on a particular day.  Vase solves this issue.

### User Flow
1.  You live in a city or town and notice there are several bad accidents every year at a particularly dangerous intersection with blind corners and want to voice your concern within the community.
2.  You login to your Co-Make account and create an issue with a description, location, and call-to-action.
3.  Over time, people who login and live in the same zip code can upvote your concern (illustrating greater need for action) or refrain from upvoting (illustrating less need for action).

### Key Features
* Create community concerns within a particular community (defined by zip code)
* Ability to vote on other community concerns to give sense of community consensus

### Frameworks and Libraries
#### Front end built with:
* React
* Semantic-UI
* Emotion
* Formik
* Yup

#### Back end built with:
* Node
* Express
* SQL
* JSON Web Token

## Installation
1.  Install Node.js on your machine.
2.  Clone the frontend repository and download it to your machine.
3.  Once you have opened the project, `cd` into the `personal_split_the_bill_frontend` directory.
4.  Install dependencies by running the `npm install` or `yarn install` command.
5.  Run the app in development mode by running the `npm start` or `yarn start` command.

## Contributing
If you'd like to contribute to this repository, please discuss the change you'd like to make via email with the owner of this repository.

### Feature Requests
We would love to hear from you about any features or fixes that might make the app better in any sense of the word.  In your initial email request, please be explicit and thorough regarding the change you'd like to make and why you think the change would improve the app.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

1.  Remember this project is licensed under the MIT license, and by submitting a pull request, your changes should follow the guideline.
2.  Update the README.md with details of your code.
3.  Submit a pull request with your changes after carefully reviewing and testing your code.
