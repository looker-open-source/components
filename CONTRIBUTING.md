# Contributing to Looker Components

🎉 Before we dive in... Thank you for taking the time contribute! 🎉

The following is a set of guidelines for contributing to Looker Components and its family packages, which are hosted in the Looker Organization on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Developer Setup

See our [README](README.md) for development setup instructions.

### Bug Reports

Bugs from the community are tracked in [Github Issues](https://github.com/looker-open-source/components/issues).

- Use a clear and descriptive title for the issue
- Note what version of the @looker/components package you're using
- Describe how to reproduce the problem
  - Bonus points for a working example in [Code Sandbox](https://codesandbox.io) (our [sample template](https://codesandbox.io/s/looker-components-template-trhxc) may come in handy)
- Explain the behavior your were expecting
- Label your issue with "bug"

## Enhancements Requests

Enhancements Requests from the community are tracked in [Github Issues](https://github.com/looker-open-source/components/issues).

- Use a clear and descriptive title for the issue
- Describe what you want to be able to accomplish with Looker Components
- Label your issue with "enhancement"

## Pull Requests

We're so excited that you're ready to make your first contribution! Go ahead and open a "New Pull Request" and you should see a sample "Developer Checklist" as well as a quick video on what we're looking for to help get your change accepted.

### Title Guidelines

We squash Pull Requests (all commits in a pull request show up in our `main` branch history as a single commit) and we use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to generate our CHANGELOG.

So we use Conventional Commit style Pull Request titles:

`<type>[optional scope]: <description>`

Examples:

```
fix(Button): Fixed support for `aria-\*` attributes
feat(NewComponentName): Component to support exciting new thing
chore(deps): Updated package dependency X from 1.0.2 to 1.0.6
```

#### Commit Message Types

The most common types used are `fix` & `feature`. See [Release Types](./RELEASING.md#release-types) for all the details as well as additional types.

#### Scope

Specify a scope when your change is focused on a specific component or portion of the code. E.g.:

```
feat(Button): Now supports even more colors 🌈
```

### Fix Backporting

Evaluate if it makes sense to back-port fix to a previous version. See [Backports in RELEASING.md](./RELEASING.md#backports) for more details.

### Developer Checklist

Edit the developer checklist to reflect only items relevant to your pull request (delete items that aren't relevant). Feel free to reach out if you have questions or get stuck.

Not sure if an item applies? Leave it in place and ask your reviewer to help determine if it's relevant.

- [ ] ♿️ Accessibility addressed
- [ ] 🌏 Localization & Internationalization addressed
- [ ] 🖼 Image Snapshot coverage
- [ ] Documentation updated 📚
- [ ] Bundle size impact addressed 🧳
- [ ] Performance impacts addressed 🚤
- [ ] Cross-browser tested 👾
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] IE11

#### What does "addressed" mean?

If your pull request introduces a regression to the item (or simply leaves that task for a later PR if the component in question isn't already marked as "stable") please document that a follow-up issue has been logged to address that item as technical debt.
