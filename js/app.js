'use strict';

/**
 * The AngularJS WeatherMood app
 */
const app = angular.module('weatherMoodApp', [
  'ui.router',
  'ngMaterial',
  'ngAnimate',
  'weatherMood.components', // On va voir dans le dossier siuté à js/compenents
  'weatherMood.services' // On va voir dans le dossier situé à js/service
]);

$(document).ready(function() {
  
   // Fakes the loading setting a timeout
     setTimeout(function() {
         $('body').addClass('loaded');
     }, 3500);
  
 });