# Looker Components Server

A local proxy server for requesting Looker data in development. You must have account authorization to a live/production Looker instance to be able to run this server.

## Setup Instructions

### Configure server

1. Rename `packages/server/looker-sample.ini` -> `packages/server/looker.ini`
1. In the new looker.ini file, fill in the following information:
   - `base_url`: The location of the target looker instance which you have account access.
   - `client_id`: A random string provided in your looker instance.
   - `client_secret`: Another random string provided in your looker instance.

Client ID and Client Secret values can be obtained by visiting your target looker instance and navigating to Admin -> Users. Click `Edit` on your account and then `Edit Keys` to view the required API3 Keys.

### Start Server

Run the following commands from the root Looker Components directory:

1. `yarn`
1. `yarn workspace server develop`

## Running Queries

To query data from a live api endpoint, you merely need to dispatch a request to the local `/api/` path. For example, if you can get information about your authenticated user account by pinging `/api/user?...`. The server will then establish a new session at the target looker instance, and forward the request with the necessary session token.

Please note that the proxy is only set up to support GET requests at this time.

```js
fetch('/api/user?fields=id,display_name,email')
  .then((response) => response.json())
  .then((state) => console.log(state))

// Example CONSOLE.LOG OUTPUT:
// {
//   display_name: 'Auth User'
//   email: 'auth-user@your-company.com'
//   id: 100
// }
```
