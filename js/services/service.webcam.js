'use strict';

/**
 * The Weather service
 */
angular.module('webcam.services').service('WebCamService',
  
  function ($http, $log, $q) {
    'ngInject';

    const_API = "https://webcamstravel.p.mashape.com/webcams/list/nearby=";

    this.get = (lat, lng) => {

      let radius = 5;

      $log.debug(LOGNS, `requesting ${lat} ${lng} weather`); // Affiche une erreur
      var deferred = $q.defer(); // defer = ?

      $http.get(const_API + lat + lng + 5).then((response) => {

        // $log.debug(LOGNS, `${city} weather is ${response.data.weather[0].main}`);
        deferred.resolve(response.data);
      }).catch((error) => {
        var message = error.data ? error.data.message : error.message || error.statusText;
        $log.debug(LOGNS, `${lat} ${lng} weather request error ${message}`);
        deferred.reject(message); // Erreur
      });

      return deferred.promise;
    };
  });