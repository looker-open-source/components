[![Build Status](https://travis-ci.com/looker-open-source/components.svg?branch=master)](https://travis-ci.com/looker-open-source/components)

This repository hosts the Looker UI Components library and the platform needed to generate our style guide. If you're looking for documentation for using Looker UI Components within your own application, you can view the documentation online at [http://components.looker.com](http://components.looker.com)

## Bugs & Feature Requests

Please file issues on [Github Issues](https://github.com/looker-open-source/components/issues)

# Contents

1. [Setting up the Project](#setting-up)
1. [Looker UI Components Development](#@looker/components-development)
1. [Yarn Link](#yarn-link)

# Setting up

### Install Yarn

This is a monorepo utilizing [Lerna](https://lerna.js.org) and [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). It is composed of a collection of packages.

If you don't have [`yarn`](https://yarnpkg.com/en/) installed, have a look at https://yarnpkg.com/en/docs/install and choose the appropriate installation for your environment.

We recommend using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm#installation-and-update) to manage multiple versions of Node. Once installed you can simply type `nvm use` in side the repository to get the appropriate version of Node installed. Then you'll need to install Yarn globally via NPM - `npm install --global yarn`

### Clone this Repository & Setup

1. `git clone git@github.com:looker-open-source/components.git`
1. `yarn`

## Packages

- [@looker/components](./packages/components/README.md) — The shared component library which powers various Looker applications
- [@looker/design-tokens](./packagen/design-tokens/README.md) — Default design values as well as our connection to styled-system
- [@looker/icons](./packages/icons/README.md) — SVG icon library, normally consumed by the `<Icon />` component in our shared component library
- [@looker/components-test-utils](./packages/test-utils/README.md) — Useful functions for mocking values and testing components.
- [www](./packages/www/README.md) — The Gatsby site which powers our living style guide
- [playground](./packages/playground/README.md) — A convenient React environment used for developing Looker UI Components
- [server](./packages/server/README.md) — A local proxy server used for querying data from production endpoints while in development.

### Common Project Commands

- **yarn develop** shortcut for booting up www, playground, and server packages for local development
- **yarn workspace www develop** starts the Gatsby server
- **yarn workspace @looker/components develop** builds the component library with a `--watch` flag. Useful when actively developing a component and you wish to see the changes appear in either the [style guide](./packages/www/README.md) or [react playground](./packages/playground/README.md)
- **yarn workspace playground develop** starts a bare-bones React app used for developing our shared components
- **yarn workspace server develop** starts a local proxy server to facilitate local fetch requests
- **yarn build** runs build across all packages. This calls several subtasks
  - **yarn build:es** use lerna to do babel build on all packages in proper order
  - **yarn postbuild** use lerna to typescript declarations in proper order and then run lint (see `lint` below)
- **yarn lint** runs all lint checks in parallel
  - **yarn lint:css** run stylelint
  - **yarn lint:es** run eslint
  - **yarn lint:ts** run tsc
- **yarn test** runs Jest across all packages

### Workspace Commands

If you're working with a specific workspace you can run commands within that specific workspace (package) by pre-pending the yarn command like so:

`yarn workspace [workspace-package-name] [command]`

E.g.: `yarn workspace @looker/components build:es`

# Publishing Components

We follow a [semantic versioning scheme](https://semver.org/). That means:

1.  API changes are only allowed in major version changes.
1.  Backwards compatible API changes can occur in minor version changes.
1.  Bug fixes occur in patch version changes.

### Update Changelog & Version

1.  Increment the version number according to sematic versioning philosophy in [package.json](package.json)
1.  Update CHANGELOG
1.  PR for package.json & CHANGELOG changes
1.  Merge PR

### 4. Tooling

### Automate code formatting and correctness whenever possible

This project takes the perspective that, as much as possible, code style (code formatting, alignment, interchangeable idioms, etc) should be dictated by automated tooling. This means tooling that can statically analyze code and actually rewrite it, either for the purpose of consistent formatting or correctness. This approach not only saves time by eliminating arguments about preferred code styles, it also reduces arbitrary diff noise for code reviewers, and decreases an engineer's overhead needed to keep code consistent with a code style or linter.

#### Use lint rules to eliminate dangerous anti-patterns

When automated tooling cannot reformat code without causing logical errors, this project employs linter rules to ensure it produces consistent, correct code. An example of one of these rules is the TSLint `no-namespace` rule. Namespacing, while a valid feature in Typescript, is the byproduct of Typescript evolving during a time when ES6 style modules did not exist (nor did the tooling around them). [Typescript itself calls out ES6 modules as the best approach to code organization moving forward](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html#using-modules):

> Starting with ECMAScript 2015, modules are native part of the language, and should be supported by all compliant engine implementations. Thus, for new projects modules would be the recommended code organization mechanism.

To ensure Typescript namespaces are never introduced into this project (because we use ES6 modules), our linter configuration disallows any use of them in code.

#### Automated Tooling

The monorepo leverages with a few code tools baked into the component authoring workflow:

- [Prettier](https://prettier.io/) simply reformats code. It has few options, intentionally, to eliminate discussion about how to configure those options.
- [ESLint](https://eslint.org/) is the standard Javascript & Typescript linting tool. It comes with a `--fix` flag which can fix many of the errors it finds.
- [Stylelint](https://stylelint.io/) lints the CSS code in the app.

##### Using the tooling

The majority of the time, using these tools should be transparent as they are hooked into a fast pre-commit hook that is enabled for all developers. If one of the lint or prettier steps fail during the pre-commit hook you'll have to fix the error before committing.

You can also configure some editors to apply their formatting on save, this is discussed in a different section below. Sometimes, however you might want to run each command manually. Below is a list of the available commands:

`yarn <command>`

- **lint** Runs all of the linters in order
- **lint:es** Lint all of the ES6 & Typescript files, including tests
- **lint:css** Lint all of the CSS, including inlined CSS
- **lint:ts** Run Typescript compiler to verify type-safety

### 5. IDE Support & Configuration

Code in this project is written in Typescript and the core team uses VSCode as our IDE of choice. Please feel free to add your favorite editor's mechanism of support if you wish.

#### VS Code

A [settings.json](https://github.com/looker-open-source/components/blob/master/.vscode/settings.json) file is checked into the repository, which contains some required settings for VS Code.

Additionally a simplistic [launch.json](https://github.com/looker-open-source/components/blob/master/.vscode/launch.json) file is also included which should allow developers to quickly run and debug tests locally, through the Jest test runner. [This file is based off of the recommendations here](https://github.com/Microsoft/vscode-recipes/tree/master/debugging-jest-tests).

##### Running Tests

1.  Go to the "Debug" panel in VS Code
2.  In the top left choose either "Jest All" or "Jest Current File"
3.  Click the Play button

##### Strongly Recommended Plugins

- [Styled Components](https://github.com/styled-components/vscode-styled-components) enables sytax highlighting and intellisense for inline CSS.
- [ESLint](https://github.com/Microsoft/vscode-eslint) enables inline linting and fixing of code on save. If you have the older vscode-tslint plugin installed, uninstall it first.

##### Very Helpful Plugins

- [Spell Check](https://github.com/Jason-Rev/vscode-spell-checker) enables spell checking in code
- [Colorize](https://github.com/kamikillerto/vscode-colorize) displays known colors (string values, hex, rgb, etc) as their actual color value
- [Prettier](https://github.com/prettier/prettier-vscode) enables Prettier code formatting on save
- [Rewrap](https://github.com/stkb/Rewrap) wraps comments at the 80 character column mark automatically
- [Sort Lines](https://github.com/Tyriar/vscode-sort-lines) quickly resort lines of code

# Yarn Link

Since Looker UI Components are often developed in tandem with another repo it can be useful to use Yarn's `link` functionality to develop new components and test the built output without having to commit and publish the changes.

See Yarn's Link documentation (https://yarnpkg.com/lang/en/docs/cli/link/) for setting up the link between the `@looker/components` package and your project.

To work properly you'll need to make this addition to your `webpack.config.js` file:

```
  resolve: {
    alias: {
      'styled-components': path.resolve(
        __dirname,
        'node_modules',
        'styled-components',
      ),
    }
  }
```

Finally, only changes that have been built will be reflected in the linked package so run `yarn build` when you want to refresh the locally-built version.
