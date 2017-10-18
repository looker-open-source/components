import angular from 'angular'

import homeTemplate from './templates/home'
import gettingStartedTemplate from './templates/getting_started'
import installationTemplate from './templates/installation'
import releaseNotesTemplate from './templates/release_notes'

// lens-main
import MainController from './controllers/main'
import mainTemplate from './templates/main'

// nav
import NavController from './controllers/main_nav'
import navTemplate from './templates/main_nav'
import mainNavDirectives from './directives/main_nav/directives_module'

// header
import PageHeaderController from './controllers/page_header'
import pageHeaderTemplate from './templates/page_header'

// footer
import PageFooterController from './controllers/page_footer'
import pageFooterTemplate from './templates/page_footer'

// playground
import PlaygroundController from './controllers/playground'
import playgroundTemplate from './templates/playground'

// "legacy" coffeescript
import subnav from './subnav'

const m = angular.module('lens.main', [
  'lens.main.directives.main_nav',
  'lens.subnav' // TODO: refactor out to .js component
])

m.component('home', { template: homeTemplate })
m.component('gettingStarted', { template: gettingStartedTemplate })
m.component('installation', { template: installationTemplate })
m.component('releaseNotes', { template: releaseNotesTemplate })

// these more complex components have controllers and/or supprting directives
m.component('lensMain', { controller: MainController, template: mainTemplate, transclude: true })
m.component('mainNav', { controller: NavController, template: navTemplate })
m.component('pageHeader', { controller: PageHeaderController, template: pageHeaderTemplate })
m.component('pageFooter', { controller: PageFooterController, template: pageFooterTemplate })
m.component('playground', { controller: PlaygroundController, template: playgroundTemplate })
