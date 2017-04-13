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
    <form>
      <label for="form-text-input-1" class="form-label m-b-05-xs">Email Address</label>
      <input type="text" class="form-text-input m-b-1-xs" id="form-text-input-1">
      <label for="form-text-input-1" class="form-label m-b-05-xs">Password</label>
      <input type="text" class="form-text-input m-b-2-xs" id="form-text-input-1">
      <input type="submit" value="Login" class="button button--primary">
    </form>
  </div>
</section>
"""
