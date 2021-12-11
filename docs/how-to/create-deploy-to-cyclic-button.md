---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 1
---

# How to: Create a 'Deploy to Cyclic' button

Follow these steps to create a button that will allow users to fork your repo and deploy to Cyclic in one action.

## Markdown

Just replace GH_LOGIN and GH_REPO

Remote hosted for markdown:

```markdown
[![Deploy to Cyclic](/img/cyclic/deploy.svg)](https://app.cyclic.sh/api/app/deploy/GH__LOGIN/GH_REPO)
```

Renders as:
[![Deploy to Cyclic](/img/cyclic/deploy.svg)](https://app.cyclic.sh/api/app/deploy/GH__LOGIN/GH_REPO)
