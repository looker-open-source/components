# Lens [![Jenkins Status](https://jenkinsexternal.looker.com/buildStatus/icon?job=lens-master)](https://jenkins.looker.com/job/lens-master/)

Lens is Looker's living and function design guide.

This repository hosts both the functional components Lens publishes and the code needed to generate a style guide which lives online, as an interactive resource.

If you're looking for information about working or writing components you're probably best served by visiting https://lens.looker.com.

# Issues & JIRA

Please file issues on [Lens' JIRA board](https://looker.atlassian.net/secure/RapidBoard.jspa?rapidView=148&projectKey=LENS&view=planning.nodetail)

# Contents

- [Setting up the Lens Project](#setting-up-the-lens-project)
- [Publishing Lens Components](#publishing-lens-components)
- [Building the Lens Style Guide](#building-the-lens-style-guide)
- [Project Commands](#project-commands)
- Further Reading
  - [Working in Lens](internal_docs/working_in_lens.md)

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
1.  `yarn test`

### 4. Run the Style Guide

Lens' style guide is based on the [Styleguidist](https://react-styleguidist.js.org/) library. You can view its generated output by doing the following:

1.  `yarn start`
1.  Open [http://localhost:6060](http://localhost:6060)

# Publishing Lens Components

Lens follows a [semantic versioning scheme](https://semver.org/). That means:

1.  API changes are only allowed in major version changes.
1.  Backwards compatible API changes can occur in minor version changes.
1.  Bug fixes occur in patch version changes.

To publish components:

1.  Increment the version number according to Lens' sematic versioning philosophy in [package.json](package.json) using `yarn version`
1.  `git push origin --tags`
1.  `yarn release`

This will publish Lens to Looker's private npm server, Nexus.

# Building the Lens Style Guide

Lens is not current published anywhere on the web. To test the styleguidist build you can:

1.  run `yarn build-styleguide`

This should build the Lens style guide and place the build artifacts in `./styleguide`. The built artifacts can be tested by:

1.  `cd styleguide`
1.  `python -m SimpleHTTPServer`
1.  open `localhost:8000`

# Project Commands

Each of these scripts can be run with `yarn <command>`. They are defined in the package.json [`scripts` stanza](https://github.com/looker/lens/blob/master/package.json#L122).

- **start** starts the Styleguidist server
- **build** builds the components and the static Styleguidist pages
- **build-components** builds just the React components, inlining their styles
- **build-styleguide** builds just the Styleguidist guide
- **clean** removes the `dist` and `styleguide` directories if they exist
- **release** runs the publishing process, distributing the package to Looker's private package repository
- **test** runs the tests

# Yarn Link

Since Lens is often developed in tandem with another repo it can be useful to use Yarn's `link` fuctionality to develop new Lens components and test the built output without having to commit and publish the changes.

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
