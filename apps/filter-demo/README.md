# @looker/filter-components Demo

This repository demonstrates how to use `@looker/filter-components` in conjunction with `@looker/embed-sdk`. It uses the [Looker Extension Framework](https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro) but the same functionality could also be accomplished in a standalone application using the [Looker SDK](https://docs.looker.com/reference/api-and-integration/api-sdk).

## Development Setup

The following instructions are based on [Looker Extension Kitchensink Template](https://github.com/looker-open-source/extension-template-kitchensink)

1. Clone or download a copy of this template to your development machine

2. Navigate (`cd`) to the template directory on your system

3. Install the dependencies with [Yarn](https://yarnpkg.com/).

   ```
   yarn install
   ```

4. Start the development server

   ```
   yarn develop
   ```

   Great! Your extension is now running and serving the JavaScript at http://localhost:8080/bundle.js.

   > **Note well:** The webpack development server also supports https. To use, add the parameter --https to the start command
   > `"develop": "webpack serve --disable-host-check --https"`
   > Should you decide to use https, you should visit the bundle URL you are running as there will likely be a certificate warning. The development server runs with a self-signed SSL certificate, so you will need to accept this to allow your browser to connect to it.

5. Now log in to Looker and create a new project.

   This is found under **Develop** => **Manage LookML Projects** => **New LookML Project**.

   You'll want to select "Blank Project" as your "Starting Point". You'll now have a new project with no files.

   1. In your copy of the extension project you have `manifest.lkml` file.

   You can either drag & upload this file into your Looker project, or create a `manifest.lkml` with the same content. Change the `id`, `label`, or `url` as needed.

   ```
   application: filter_demo {
    label: "Filter Demo"
    url: "http://localhost:8080/bundle.js"
    entitlements: {
        core_api_methods: ["theme_or_default", "all_dashboards", "dashboard", "update_dashboard", "model_fieldname_suggestions"]
        navigation: yes
        use_embeds: yes
    }
   }
   ```

6. Create a `model` LookML file in your project. The name doesn't matter. The model and connection won't be used, and in the future this step may be eliminated.

   - Add a connection in this model. It can be any connection, it doesn't matter which.
   - [Configure the model you created](https://docs.looker.com/data-modeling/getting-started/create-projects#configuring_a_model) so that it has access to some connection.

7. Connect your new project to Git. You can do this multiple ways:

   - Create a new repository on GitHub or a similar service, and follow the instructions to [connect your project to Git](https://docs.looker.com/data-modeling/getting-started/setting-up-git-connection)
   - A simpler but less powerful approach is to set up git with the "Bare" repository option which does not require connecting to an external Git Service.

8. Commit your changes and deploy your them to production through the Project UI.

9. Reload the page and click the `Browse` dropdown menu. You should see your extension in the list. The extension will load the JavaScript from the `url` you provided in the `application` definition.
