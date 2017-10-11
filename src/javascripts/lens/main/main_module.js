import angular from 'angular'

import homeTemplate from './templates/home'
const m = angular.module('lens.main', [
])
m.component('home', { template: homeTemplate })
