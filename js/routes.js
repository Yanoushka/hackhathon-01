'use strict';

/**
 * The AngularJS WeatherMood app configrution
 */
angular.module('weatherMoodApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        template: ' '
      })
  });