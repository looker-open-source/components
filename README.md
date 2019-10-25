# Lens [![Jenkins Status](https://jenkinsexternal.looker.com/buildStatus/icon?job=lens-master)](https://jenkins.looker.com/job/lens-master/)

Lens is Looker's design system. It exists as a series of Figma templates as well as the documentation within this repository.

This repository hosts both the functional components Lens publishes and the code needed to generate a style guide which lives online, as an interactive resource.

Lens is a monorepo utilizing [Lerna](https://lerna.js.org) and [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). It is composed of a collection of packages:

- `looker-lens`
- `looker-design-tokens` - default design values as well as our extensions to styled-system
  - NOTE: `looker-components-system` - will be extracted from this package in short-order
- `looker-icons` - icon set
- `playground` - A local development playground for use when developing components
  - See more details on local development in the [Playground README](./packages/playground/README.md)
- `test-utils` - utility functions for testing components.
- `www` - The Gatsby site that powers Lens' living style guide
  - See more details on running Gatsby in the [WWW README](./packages/www/README.md)

If you're looking for information about working or writing components you're probably best served by visiting https://lens.looker.com.

# Issues & JIRA

Please file issues on [Lens' JIRA board](https://looker.atlassian.net/secure/RapidBoard.jspa?rapidView=148&projectKey=LENS&view=planning.nodetail)

# Contents

- [Setting up the Lens Project](#setting-up-the-lens-project)
- [Publishing Lens Components](#publishing-lens-components)
- [Building the Lens Style Guide](#building-the-lens-style-guide)
- [Project Commands](#project-commands)
- [Nexus Integration](#nexus)

# Setting up the Lens Project

### 1. Install Yarn

[`yarn`](https://yarnpkg.com/en/) must be installed. If you don't have yarn installed, have a look at https://yarnpkg.com/en/docs/install and choose the appropriate installation for your environment.

### 2. Configure gradle.properties file

Lens needs to connect to Looker's private npm registry, powered by Nexus. Lens has some scripts that take care of this setup automatically, but they assume that some setup from Helltool has already been completed, specifically configuration of a gradle.properties file.

If you have Helltool installed and running, you've likely already setup your gradle.properties file to connect to our Nexus server. [If not take a look at the relevant Helltool directions and follow them so you can get the Nexus server username and password first](https://github.com/looker/helltool#dependencies).

### 3. Clone this Repository & Setup

1.  `git clone git@github.com:looker/lens.git`
1.  `yarn npmrc`
1.  `yarn`
1.  `yarn build`
1.  `yarn test`

### 4. Run the Style Guide

Lens' style guide is based on the [Gatsby](https://gatsby.org/) . You can view its generated output by doing the following:

1.  `yarn workspace www develop`
1.  Open [http://localhost:8000](http://localhost:8000)

# Publishing Lens Components

Lens follows a [semantic versioning scheme](https://semver.org/). That means:

1.  API changes are only allowed in major version changes.
1.  Backwards compatible API changes can occur in minor version changes.
1.  Bug fixes occur in patch version changes.

## Update Changelog & Version

1.  Increment the version number according to Lens' sematic versioning philosophy in [package.json](package.json)
1.  Update CHANGELOG
1.  PR for package.json & CHANGELOG changes
1.  Merge PR

## Publish

1.  `git co master`
1.  TODO - Need to rewrite this section

This will publish Lens to Looker's private npm server, Nexus.

# Project Commands

Each of these scripts can be run with `yarn <command>`. They are defined in the package.json [`scripts` stanza](https://github.com/looker/lens/blob/master/package.json#L122).

- **workspace www develop** starts the Gatsby server
- **build** runs build across all packages. This calls several subtasks
  - **build:es** use lerna to do babel build on all packages in proper order
  - **postbuild** use lerna to typescript declarations in proper order and then run lint (see `lint` below)
- **lint** runs all lint checks in parallel
  - **lint:css** run stylelint
  - **lint:es** run eslint
  - **lint:ts** run tsc
- **test** runs Jest across all packages. NOTE: `yarn build` must be completed before running this
- **npmrc** regenerate the .npmrc file. This should only be necessary if the Nexus credentials change

## Workspace Commands

If you're working with a specific workspace you can run commands within that specific workspace (package) by prepending the yarn command like so:

`yarn workspace [workspace-package-name] [command]`

E.g.: `yarn workspace looker-lens build:es`

Commonly used workspace commands are:

See workspace specific README files:

- [Playground](./packages/playground/README.md): Local development environment
- [Gatsby Static Site Generator](./packages/www/README.md): Use this to start our local gatsby development server that powers our living style guide

# Yarn Link

Since Lens is often developed in tandem with another repo it can be useful to use Yarn's `link` functionality to develop new Lens components and test the built output without having to commit and publish the changes.

See Yarn's Link documentation (https://yarnpkg.com/lang/en/docs/cli/link/) for setting up the link between the `looker-lens` package and your project.

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

Finally, only changes that have been built will be reflected in the linked package so run `yarn build` when you want to refresh the locally-built version Lens.

# Nexus Integration

Lens is packaged and published to Looker's internal artifact server, called Nexus. It does this via a configuration in the local `.npmrc` file. This file can be generated by running `yarn npmrc` inside the Lens project directory.

### Nexus Credential Changes

When Nexus credentials are changed, you may need to run `yarn npmrc` again, before you can publish the Lens package to Nexus. If you do not do this, you will likely get an unauthorized error.
