'use strict';

/**
 * The AngularJS WeatherMood app
 */
const app = angular.module('weatherMoodApp', [
  'ui.router',
  'ngMaterial',
  'ngAnimate',
  'weatherMood.components',
  'weatherMood.services'
]);