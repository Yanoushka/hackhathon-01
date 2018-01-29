'use strict';
// var unirest = require('unirest');

/**
 * The Weather service
 */
angular.module('app').service('WebcamService',

  function ($http, $log, $q) {
    'ngInject';

    const API = "https://webcamstravel.p.mashape.com/webcams/list/nearby=";
    const API_REST = "?lang=fr&show=webcams%3Aimage%2Clocation"
    const KEY = "spHKFd2HikmshzjxPWjeFGkMGJrlp1Qwu1njsnGBedeNs6Qat4"
    const LOGNS = 'WC ::';    
    

    this.getWebcam = (lat, lng, radius) => {

      $log.debug(LOGNS, `requesting ${lat} ${lng} weather`); // Affiche une erreur
      var deferred = $q.defer(); // defer = ?

      // unirest.get(API + ',' + lng + ',' + radius + API_REST)
      //   .header("X-Mashape-Key", KEY)
      //   .end(function (result) {
      //     console.log(result.status, result.headers, result.body);
      //   });

      $http.get(API + lat + ',' + lng + ',' + radius + API_REST, {
          headers: {
            "X-Mashape-Key": "spHKFd2HikmshzjxPWjeFGkMGJrlp1Qwu1njsnGBedeNs6Qat4"
          }
        })
        .then((response) => {

          // $log.debug(LOGNS, `${city} weather is ${response.data.weather[0].main}`);
          deferred.resolve(response.data.result.webcams);
        }).catch((error) => {
          var message = error.data ? error.data.message : error.message || error.statusText;
          $log.debug(LOGNS, `${lat} ${lng} weather request error ${message}`);
          deferred.reject(message); // Erreur
        });

      return deferred.promise;
    };
  });