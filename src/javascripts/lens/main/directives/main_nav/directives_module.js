import angular from 'angular'
import toggleMobileNav from './toggle_mobile_nav'
import toggleSubNav from './toggle_sub_nav'

const m = angular.module('lens.main.directives.main_nav', [])

m.directive('toggleMobileNav', toggleMobileNav)
m.directive('toggleSubNav', toggleSubNav)
