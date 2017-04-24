m = angular.module "lens.login", []


m.controller "LoginController", (
  $scope
) ->
  return this


m.directive "login", ->
  controller: "LoginController"
  restrict: "E"
  scope: {}
  template: template


template = """
<header class="login-header brand-bg-gray">
  <div class="login-header-wrap">
    <h1 class="login-name color-white">Lens</h1>
    <p class="login-copy color-white text-size-3-xs text-2-lg">The Looker Design System</p>
  </div>
</header>

<section class="login-auth">
  <div class="login-auth-wrap">
    <h1 class="m-b-2-xs">Login to Lens</h1>
    <a href="/api/saml/login" target="_self" class="button button--primary">Authenticate via Lookery</a>
  </div>
</section>
"""
