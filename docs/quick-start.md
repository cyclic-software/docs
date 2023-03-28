---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---

# TLDR

## Quick start example

Launch a pre-baked expressjs starter:

[![Deploy Expressjs Starter on Cyclic](/img/cyclic/deploy.svg)](https://app.cyclic.sh/api/app/deploy/cyclic-software/express-hello-world)


## Product tour

<iframe width="560" height="315" src="https://www.youtube.com/embed/UnhTGEtOD6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Launching your own app

Go to the `Link Your Own` tab on the deployment page. This will let you chose a repo from one of your public GitHub repos.

---------
Here is what you need to know:

1. Cyclic supports **nodejs** apps that live in **GitHub repos**
2. A `package.json` must exist at the root of the repo
3. On every deployment Cyclic will run `npm install` for production and will prune dev dependencies 
   - Cyclic will also run `npm run build` if a build script has been defined in the `package.json`
4. The `package.json` should have a `scripts` property with a `start` command

   - **Cyclic will run your apps by calling** `npm run start`
5. The start command must start a server on a port

   - **Cyclic will discover the port automatically** or you can configure it in environment variables
6. **All apps are serverless**
7. New deployments will be triggered automatically on code changes to the default branch of the repo

## Next steps?

You can try one of our other starters listed on the [starters page](/overview/starters)
