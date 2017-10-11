import angular from 'angular'

import homeTemplate from './templates/home'
import gettingStartedTemplate from './templates/getting_started'
import installationTemplate from './templates/installation'
import releaseNotesTemplate from './templates/release_notes'
const m = angular.module('lens.main', [
])
m.component('home', { template: homeTemplate })
m.component('gettingStarted', { template: gettingStartedTemplate })
m.component('installation', { template: installationTemplate })
m.component('releaseNotes', { template: releaseNotesTemplate })
