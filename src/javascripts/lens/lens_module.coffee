require "angular-ui-router"

require "./../app_config/app_config"
require "./../user/current_user"

require "./login"

require "./main/main_module"
require "./atoms/atoms_module"
require "./components/components_module"
require "./guidelines/guidelines_module"

module.exports = m = angular.module "Lens", [
  "ui.router"

  "lens.app_config"
  "lens.current_user"

  "lens.login"

  "lens.atoms"
  "lens.main"
  "lens.components"
  "lens.guidelines"
]

m.config ['$stateProvider', '$locationProvider', '$urlRouterProvider', (
  $stateProvider,
  $locationProvider,
  $urlRouterProvider
) ->
  $locationProvider.html5Mode true
  $urlRouterProvider.otherwise('/')

  authenticate = [
    '$q',
    'AppConfig',
    'CurrentUser',
    '$state',
    ($q, AppConfig, CurrentUser, $state) ->
      AppConfig.get().then((config) ->
        if config.isLocalDevelopmentEnvironment
          return $q.when()
        else
          CurrentUser.get().then((user) ->
            if user
              return $q.when()
            else
              $state.go('login')
              return $q.reject()
          ).catch((error) ->
            console.error(error)
            $state.go('login')
            return $q.reject()
          )
      )
  ]

  loginState =
    name: 'login'
    url: '/login'
    template: '<login></login>'
    title: 'Login to view Lens'
    isLogin: true
  homeState =
    name: 'home'
    url: '/'
    template: '<home></home>'
    title: 'Welcome to Lens'
    resolve: {authenticate: authenticate}
  gettingStartedState =
    name: 'getting-started'
    url: '/getting-started'
    template: '<getting-started></getting-started>'
    title: 'Getting Started'
    resolve: {authenticate: authenticate}

  playgroundState =
    name: 'playground'
    url: '/playground'
    template: '<playground></playground>'
    title: 'Playground'
    resolve: {authenticate: authenticate}

# Guidelines
  markupState =
    name: 'markup'
    url: '/guidelines/markup'
    template: '<markup></markup>'
    title: 'Markup'
    resolve: {authenticate: authenticate}
  responsiveState =
    name: 'responsive'
    url: '/guidelines/responsive'
    template: '<responsive></responsive>'
    title: 'Responsive'
    resolve: {authenticate: authenticate}
  environmentPropertiesState =
    name: 'environment-properties'
    url: '/guidelines/environment-properties'
    template: '<environment-properties></environment-properties>'
    title: 'Environment Properties'
    resolve: {authenticate: authenticate}

# Components
  buttonsState =
    name: 'buttons'
    url: '/components/buttons'
    template: '<buttons></buttons>'
    title: 'Buttons'
    resolve: {authenticate: authenticate}
  formsState =
    name: 'forms'
    url: '/components/forms'
    template: '<forms></forms>'
    title: 'Forms'
    resolve: {authenticate: authenticate}
  tablesState =
    name: 'tables'
    url: '/components/tables'
    template: '<tables></tables>'
    title: 'Tables'
    resolve: {authenticate: authenticate}
  modalsState =
    name: 'modals'
    url: '/components/modals'
    template: '<modals></modals>'
    title: 'Modals'
    resolve: {authenticate: authenticate}
  bodyCopyState =
    name: 'body-copy'
    url: '/components/body-copy'
    template: '<body-copy></body-copy>'
    title: 'Body Copy'
    resolve: {authenticate: authenticate}
  headingsState =
    name: 'headings'
    url: '/components/headings'
    template: '<headings></headings>'
    title: 'Headings'
    resolve: {authenticate: authenticate}

# Atoms
  blockGridState =
    name: 'block-grid'
    url: '/atoms/block-grid'
    template: '<block-grid></block-grid>'
    title: 'Block Grid'
    resolve: {authenticate: authenticate}
  bordersState =
    name: 'borders'
    url: '/atoms/borders'
    template: '<borders></borders>'
    title: 'Borders'
    resolve: {authenticate: authenticate}
  boxPropertiesState =
    name: 'spacing-sizing'
    url: '/atoms/spacing-sizing'
    template: '<spacing-sizing></spacing-sizing>'
    title: 'Spacing and Sizing'
    resolve: {authenticate: authenticate}
  colorsState =
    name: 'colors'
    url: '/atoms/colors'
    template: '<colors></colors>'
    title: 'Colors'
    resolve: {authenticate: authenticate}
  effectsState =
    name: 'effects'
    url: '/atoms/effects'
    template: '<effects></effects>'
    title: 'Effects'
    resolve: {authenticate: authenticate}
  flexboxState =
    name: 'flexbox'
    url: '/atoms/flexbox'
    template: '<flexbox></flexbox>'
    title: 'Flexbox'
    resolve: {authenticate: authenticate}
  gridState =
    name: 'grid'
    url: '/atoms/grid'
    template: '<grid></grid>'
    title: 'Grid'
    resolve: {authenticate: authenticate}
  iconsState =
    name: 'icons'
    url: '/atoms/icons'
    template: '<icons></icons>'
    title: 'Icons'
    resolve: {authenticate: authenticate}
  layoutState =
    name: 'layout'
    url: '/atoms/layout'
    template: '<layout></layout>'
    title: 'Layout'
    resolve: {authenticate: authenticate}
  typographyState =
    name: 'typography'
    url: '/atoms/typography'
    template: '<typography></typography>'
    title: 'Typography'
    resolve: {authenticate: authenticate}
  installationState =
    name: 'installation'
    url: '/installation'
    template: '<installation></installation>'
    title: 'Installation'
    resolve: {authenticate: authenticate}
  releaseNotesState =
    name: 'release-notes'
    url: '/release-notes'
    template: '<release-notes></release-notes>'
    title: 'Release Notes'
    resolve: {authenticate: authenticate}

  $stateProvider.state loginState
  $stateProvider.state homeState
  $stateProvider.state gettingStartedState

  $stateProvider.state playgroundState

  $stateProvider.state markupState
  $stateProvider.state responsiveState
  $stateProvider.state environmentPropertiesState

  $stateProvider.state buttonsState
  $stateProvider.state formsState
  $stateProvider.state tablesState
  $stateProvider.state modalsState
  $stateProvider.state bodyCopyState
  $stateProvider.state headingsState

  $stateProvider.state blockGridState
  $stateProvider.state bordersState
  $stateProvider.state boxPropertiesState
  $stateProvider.state colorsState
  $stateProvider.state effectsState
  $stateProvider.state flexboxState
  $stateProvider.state gridState
  $stateProvider.state iconsState
  $stateProvider.state layoutState
  $stateProvider.state typographyState

  $stateProvider.state installationState
  $stateProvider.state releaseNotesState
  return this

]

m.run ->
