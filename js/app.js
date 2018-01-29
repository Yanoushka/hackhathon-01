'use strict';

/**
 * The AngularJS WeatherMood app
 */
const app = angular.module('app', [
  'ngMaterial',
  'ngAnimate'
]);

$(document).ready(function() {
  
   // Fakes the loading setting a timeout
     setTimeout(function() {
         $('body').addClass('loaded');
     }, 3500);
  
 });