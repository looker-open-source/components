# Lens

Lens is Looker's design system. View the docs at https://lens.dev.looker.com/.

## Developing Lens

You can run Lens locally to view the documentation, develop, and live-compile to CSS.

### Requirements

- node.js
  - To install with Homebrew: `$ brew install node`
  - Node version switching is supported with `nvm`
    - To install with Homebrew: `$ brew install nvm`
- yarn
  - To install with Homebrew: `$ brew install yarn`

### Running locally:
1. Navigate to project folder
2. `$ yarn install` to install Node dependencies
3. `$ yarn start` to run the local servers
4. Open browser to http://localhost:8080/

Note: Running `$ yarn start` will clean the `/dist` directory, removing it locally so that your changes don't automatically re-complie. If you run `$ git status` after starting yarn, you'll see these files are deleted. You can run `$ git stash` to tuck these changes out of the way while you work.

### Building for production:
_**(Once you've made local changes and are ready to deploy them to Lens in production)**_

Rebuild the `/dist` directory
1. Commit all your local changes using good, descriptive commit messages
2. `$ yarn run build` runs webpack to delete and rebuild the `/dist` directory. This
causes git to stop tracking the `/dist` directory so re-add with `$ git add dist/`.
3. Create a _separate_ "build" commit that only includes the updated `/dist` files
4. Submit a Pull Request to be reviewed and merged into master.

Test your production build:
1. Make sure your local (git ignored!) `.env` file contains the correct credentials (ask ops-requests if you need help getting them)
2. `$ yarn run production` runs the production server
3. Open browser to http://localhost:3000/ to make sure it works as expected! You should be prompted to log in via Google with your looker email.

### Re-deploying to lens.dev.looker.com:
_**(Only when your PR is merged to master and you've tested the build with the steps above)**_

1. Send a request to ops-requests@looker.com for Lens to be re-deployed (it will be synced with the latest build commit on master)
2. Once http://lens.dev.looker.com/status reflects your latest build commit, http://lens.dev.looker.com should be up to date with your latest changes!

## Lens in Helltool
Helltool will stay pegged to a specific version of Lens. Helltool will require
an additional commit to update to a different version. That means that the version on http://lens.dev.looker.com  _may_ not match what you see on helltool.

To update the version of Lens in Helltool, update the commit SHA  [here](https://github.com/looker/helltool/blob/master/package.json).
You can find Lens inside `dependencies`. **The commit should include the
latest build of the `dist/` directory.**

### When to update Lens in Helltool
_Coming soon..._

### Finding the Lens version Helltool is using
_Coming soon..._

## Versioning / Version History
_Coming soon: what is the most current version? rules for updating version number? ..._

## Copyright and license
©2017 Looker Data Sciences, Inc.
