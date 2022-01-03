---
sidebar_position: 3
---

# Deploy

We pre-provision AWS serverless infrastructure to make every deployment, even the first, super fast. This means we are able to deploy in seconds. Usually about 6 seconds for apps with a few dependencies. It can take longer if your app has a long build step (nextjs for example).

For deployments that take place into Cyclic managed accounts this means there is nothing else to worry about. The deployments are so easy and fast there really isn't anything else to say.

## Triggering a Deployment
Code is deployed as soon as it's GitHub repository has been connected to Cyclic. Cyclic will use the GitHub default branch to pull the repo contents. On GitHub the default branch is usually  `main` or `master`. 

Every `git push` or change to the default branch will trigger a cyclic deployment. This includes direct pushes as well as pull request merges. 