import angular from 'angular'

import homeTemplate from './templates/home'
import gettingStartedTemplate from './templates/getting_started'
import installationTemplate from './templates/installation'
import releaseNotesTemplate from './templates/release_notes'

// lens-main
import MainController from './controllers/main'
import mainTemplate from './templates/main'
const m = angular.module('lens.main', [
])
m.component('home', { template: homeTemplate })
m.component('gettingStarted', { template: gettingStartedTemplate })
m.component('installation', { template: installationTemplate })
m.component('releaseNotes', { template: releaseNotesTemplate })

// these more complex components have controllers and/or supprting directives
m.component('lensMain', { controller: MainController, template: mainTemplate, transclude: true })
