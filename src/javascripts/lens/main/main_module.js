import angular from 'angular'

import homeTemplate from './templates/home'
import gettingStartedTemplate from './templates/getting_started'
const m = angular.module('lens.main', [
])
m.component('home', { template: homeTemplate })
m.component('gettingStarted', { template: gettingStartedTemplate })
