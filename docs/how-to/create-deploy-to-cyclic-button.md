---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---

# Create 'Deploy to Cyclic' button

Follow these steps to create a button that will allow users to fork your repo and deploy to Cyclic in one action.

## Easy

Just copy this markdown directly into your README.md file inside your repo on Github. The target `https://deploy.cyclic.sh/` uses http referrer header to determine the source repo to use in targeting the `app.cyclic.sh` deploy path.

```markdown
[![Deploy to Cyclic](https://deploy.cyclic.sh/button.svg)](https://deploy.cyclic.sh/)
```

Renders as:

[![Deploy to Cyclic](https://deploy.cyclic.sh/button.svg)](https://deploy.cyclic.sh/)

## HTML

If you would like to embed HTML directly into a site with a configured target you can set the `app.cyclic.sh` path yourself. Replace `GH_LOGIN` and `GH_REPO` with the values for your Github user name and repository name.

For example if you wanted to create a fork and deploy button for: https://github.com/seekayel/express-hello-world

The values would be:

```toml
GH_LOGIN=seekayel
GH_REPO=express-hello-world
```

```html
<a href="https://deploy.cyclic.sh/GH_LOGIN/GH_REPO">
    <img src="https://deploy.cyclic.sh/button.svg" />
</a>
```

Renders as:

<a href="https://deploy.cyclic.sh/GH_LOGIN/GH_REPO">
    <img src="https://deploy.cyclic.sh/button.svg" />
</a>
