---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 1
---

# Create 'Deploy to Cyclic' button

Follow these steps to create a button that will allow users to fork your repo and deploy to Cyclic in one action.

## Easy

Just copy this markdown directly into your README.md file inside your repo on github. The target `https://deploy.cyclic.app/` uses http referrer header to determine the source repo to use in targeting the `app.cyclic.sh` deploy path.

```markdown
[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)
```

Renders as:

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

## HTML

If you would like to embed HTML directly into a site with a configured target you can set the `app.cyclic.sh` path yourself. Replace `GH_LOGIN` and `GH_REPO` with the values for your Github user name and repository name.

For example if you wanted to create a fork and deploy button for: https://github.com/seekayel/express-hello-world

The values would be:

```toml
GH_LOGIN=seekayel
GH_REPO=express-hello-world
```

```html
<a href="https://app.cyclic.sh/api/app/deploy/GH_LOGIN/GH_REPO">
    <img src="https://deploy.cyclic.app/button.svg" />
</a>
```

Renders as:

<a href="https://app.cyclic.sh/api/app/deploy/GH_LOGIN/GH_REPO">
    <img src="https://deploy.cyclic.app/button.svg" />
</a>
