'use strict';

/**
 * The Weather service
 */
angular.module('app').service('WeatherService',

  function ($http, $log, $q) { // on déclare une fonction callback qui utilise les méthodes déclaré en paramètre
    'ngInject'; // Utilisez pour faire fonctionnez en appli.min peut être retiré.

    const API_URL = "http://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q="; // première partie de la route
    const API_KEY = "2c8c22e7283717b657e8dd338db9fc51"; // key de connexion
    const LOGNS = 'WS ::';    
    /**
     * Request the weather for the given city
     */
    this.get = function (city) { // On déclare une route.get, on y passe city qu'on récupera ultérieurement

      $log.debug(LOGNS, `requesting ${city} weather`); // Affiche une erreur
      var deferred = $q.defer(); // defer = ?

      $http.get(API_URL + city + "&APPID=" + API_KEY).then((response) => { // On fait l'appel à l'api ici ou du moins on en crée la route
        
        $log.debug(LOGNS, `${city} weather is ${response.data.weather[0].main}`); // Affiche une erreur 

        // Add the default icon url to the retrieved weather object
        try {
          response.data.icon = `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`; // On va chercher l'icone du temps
        } catch (e) { // Erreur
          $log.warn(LOGNS, e);
        }
        
        deferred.resolve(response.data); // Defer on y mets la réponse?

      }).catch((error) => {
        var message = error.data ? error.data.message : error.message || error.statusText;
        $log.debug(LOGNS, `${city} weather request error ${message}`);
        deferred.reject(message); // Erreur
      });

      return deferred.promise; // Return peu importe trouvé ou erreur
    };

    
      // this.getWebcam = (lat, lng) => {
  
      //   let radius = 5;
    
      //   $log.debug(LOGNS, `requesting ${lat} ${lng} weather`); // Affiche une erreur
      //   var deferred = $q.defer(); // defer = ?
  
      //   $http.get(API + lat + lng + radius).then((response) => {
  
      //     // $log.debug(LOGNS, `${city} weather is ${response.data.weather[0].main}`);
      //     deferred.resolve(response.data);
      //   }).catch((error) => {
      //     var message = error.data ? error.data.message : error.message || error.statusText;
      //     $log.debug(LOGNS, `${lat} ${lng} weather request error ${message}`);
      //     deferred.reject(message); // Erreur
      //   });
    
      //   return deferred.promise;
      // };

});