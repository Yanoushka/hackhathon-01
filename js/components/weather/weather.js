'use strict';

/**
 * The Weather component
 */
angular.module('app').component("weather", { // On vient là grace à index.js qui lui même vient de app.js

  templateUrl: '/js/components/weather/weather.html', // Tu agira dans le template weather.html

  bindings: { // ???
    showToast: '&',
    showLoader: '&'
  },

  controller: function (WeatherService, $rootScope) { // on déclare un objet controller : qui à pour valeur une fonction qui prend en paramètre 
                                                  // notre service, ainsi que le scope qui est en faite la ville que l'on veut.
    'ngInject'; // Impact sur l'autre ngInject ?

    /**
     * Get current weather for the supplied city
     */
    this.getWeather = (query) => { // On crée une autre fonction qui à this -> weather.html qui prend en paramètre le nom de la ville rentrée

      this.showLoader({show: true}); // A voir avec le binding on verra plus tard

      WeatherService.get(query).then((data) => { // Promise 

        // Save meteo data for the requested city
        this.data = data; // Et le querry fut data
        $rootScope.$broadcast('GET_WEBCAMS', data.coord.lat, data.coord.lon);

      }).catch((err) => { // A voir
        this.showToast({message: err}); // A voir
      }).finally(() => {
        this.showLoader({show: false}); // A voir
      });
    };
   }
});