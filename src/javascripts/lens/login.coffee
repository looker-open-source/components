m = angular.module "lens.login", []


m.controller "LoginController", ['$scope', '$window', 'AppConfig', (
  $scope
  $window
  AppConfig
) ->
  isLocalDevelopmentEnvironment = false
  AppConfig.get().then((config) ->
    isLocalDevelopmentEnvironment = config.isLocalDevelopmentEnvironment
  )

  $scope.onSignIn = (googleUser) ->
    if isLocalDevelopmentEnvironment
      $window.location.href = '/'
    else
      profile = googleUser.getBasicProfile()
      id_token = googleUser.getAuthResponse().id_token

      $.ajax({
        url: 'api/google/auth',
        method: 'POST',
        dataType: 'JSON',
        data: {
          idtoken: id_token
        }
      }).done((data) ->
        $window.location.href = '/';
      ).fail((data) ->
        console.error(data.status + ' Error:', data)
      )

  $scope.onError = (error) ->
    console.error(error)

  return this
]


m.directive "login", ['$window', (
  $window
) ->
  controller: "LoginController"
  restrict: "E"
  scope: {}
  template: template
  link: (scope, $el, attr, ctrl) ->

    $window.renderButton = =>
      button = document.getElementById('custom-google-btn')
      auth2 = $window.gapi.auth2.getAuthInstance()
      auth2.attachClickHandler(button, {}, scope.onSignIn, scope.onError)

    $("main-nav").remove()
    $("page-footer").remove()
    $("page-header").remove()
]

template = """
<header class="login-header brand-bg-gray">
  <div class="login-header-wrap">
    <h1 class="login-name color-white">Lens</h1>
    <p class="login-copy color-white">The Looker Design System</p>
  </div>
</header>

<section class="login-auth">
  <div class="login-auth-wrap">
    <h1 class="m-b-2-xs">Login to Lens</h1>
    <div id="custom-google-btn" class="button button--primary">Authenticate with Google</div>
    <div class="g-signin2" style="display:none;"></div>
  </div>
</section>

<script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
"""
