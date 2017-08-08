# Lens

Lens is Looker's design system.

## Developing Lens

You can run Lens locally to view the documentation, develop, and live-compile to CSS.

##### Requirements

- node.js
  - To install with Homebrew: `brew install node`
  - Node version switching is supported with `nvm`
    - To install with Homebrew: `brew install nvm`
- yarn
  - To install with Homebrew: `brew install yarn`

#### To run locally:
1. Navigate to project folder
2. `yarn install` to install Node dependencies
3. `yarn start` to run the local servers
4. Open browser to http://localhost:8080/

#### To build for production:
_**Once you've made local changes and are ready to deploy them to Lens in production**_
1. Commit all your local changes using good, descriptive commit messages.
2. `yarn run build` runs webpack to build the `/dist` directory
3. Create a _separate_ build commit that only includes the updated `/dist` files
4. Submit a Pull Request to be reviewed and merged into master

To test your production build:
5. Make sure your local (git ignored!) `.env` file contains the correct credentials (ask @natatat or ops-requests if you need help getting them)
4. `yarn run production` runs the production server
5. Open browser to http://localhost:3000/ to make sure it works as expected!

**To re-deploy to lens.dev.looker.com** _(only when your PR is merged to master and you've tested the build)_:
1. Send a request to ops-requests@looker.com for Lens to be re-deployed (it will be synced with the latest build commit on master)
2. Once lens.dev.looker.com/status reflects your latest build commit, lens.dev.looker.com should be up to date!

## Copyright and license
©2017 Looker Data Sciences, Inc.
