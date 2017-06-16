require "angular-ui-router"
require "./lens_main.coffee"
require "./main_nav.coffee"
require "./page_footer.coffee"

require "./login.coffee"
require "./index.coffee"
require "./getting_started.coffee"
require "./responsive.coffee"
require "./release_notes.coffee"
require "./installation.coffee"
require "./sass.coffee"

require "./guidelines/guidelines_module.coffee"
require "./atoms/atoms_module.coffee"
require "./components/components_module.coffee"

module.exports = m = angular.module "Lens", [
  "ui.router"
  "lens.index"
  "lens.login"
  "lens.lens_main"
  "lens.main_nav"
  "lens.page_footer"

  "lens.getting_started"
  "lens.sass"
  "lens.responsive"
  "lens.installation"
  "lens.release_notes"

  "lens.guidelines"
  "lens.components"
  "lens.atoms"
]

m.config (
  $locationProvider
  $stateProvider
) ->
  $locationProvider.html5Mode true

  loginState =
    name: 'login'
    url: '/login'
    template: '<login></login>'
    title: 'Login to view Lens'
  indexState =
    name: 'index'
    url: '/'
    template: '<index></index>'
    title: 'Welcome to Lens'
  gettingStartedState =
    name: 'getting-started'
    url: '/getting-started'
    template: '<getting-started></getting-started>'
    title: 'Getting Started'
# Guidelines
  markupState =
    name: 'markup'
    url: '/guidelines/markup'
    template: '<markup></markup>'
    title: 'Markup'
# Components
  buttonsState =
    name: 'buttons'
    url: '/components/buttons'
    template: '<buttons></buttons>'
    title: 'Buttons'
  formsState =
    name: 'forms'
    url: '/components/forms'
    template: '<forms></forms>'
    title: 'Forms'
  tablesState =
    name: 'tables'
    url: '/components/tables'
    template: '<tables></tables>'
    title: 'Tables'
# Atoms
  blockGridState =
    name: 'block-grid'
    url: '/atoms/block-grid'
    template: '<block-grid></block-grid>'
    title: 'Block Grid'
  bordersState =
    name: 'borders'
    url: '/atoms/borders'
    template: '<borders></borders>'
    title: 'Borders'
  colorsState =
    name: 'colors'
    url: '/atoms/colors'
    template: '<colors></colors>'
    title: 'Colors'
  flexboxState =
    name: 'flexbox'
    url: '/atoms/flexbox'
    template: '<flexbox></flexbox>'
    title: 'Flexbox'
  gridState =
    name: 'grid'
    url: '/atoms/grid'
    template: '<grid></grid>'
    title: 'Grid'
  iconsState =
    name: 'icons'
    url: '/atoms/icons'
    template: '<icons></icons>'
    title: 'Icons'
  layoutState =
    name: 'layout'
    url: '/atoms/layout'
    template: '<layout></layout>'
    title: 'Layout'
  typographyState =
    name: 'typography'
    url: '/atoms/typography'
    template: '<typography></typography>'
    title: 'Typography'

  sassState =
    name: 'sass'
    url: '/sass'
    template: '<sass></sass>'
    title: 'Sass'
  responsiveState =
    name: 'responsive'
    url: '/responsive'
    template: '<responsive></responsive>'
    title: 'Responsive'
  installationState =
    name: 'installation'
    url: '/installation'
    template: '<installation></installation>'
    title: 'Installation'
  releaseNotesState =
    name: 'release-notes'
    url: '/release-notes'
    template: '<release-notes></release-notes>'
    title: 'Release Notes'

  $stateProvider.state loginState
  $stateProvider.state indexState
  $stateProvider.state gettingStartedState

  $stateProvider.state markupState

  $stateProvider.state buttonsState
  $stateProvider.state formsState
  $stateProvider.state tablesState

  $stateProvider.state blockGridState
  $stateProvider.state bordersState
  $stateProvider.state colorsState
  $stateProvider.state flexboxState
  $stateProvider.state gridState
  $stateProvider.state iconsState
  $stateProvider.state layoutState
  $stateProvider.state typographyState

  $stateProvider.state sassState
  $stateProvider.state responsiveState
  $stateProvider.state installationState
  $stateProvider.state releaseNotesState
  return

m.run ->
