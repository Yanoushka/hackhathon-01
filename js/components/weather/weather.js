'use strict';

/**
 * The Weather component
 */
angular.module('weatherMood.components').component("weather", {

  templateUrl: '/js/components/weather/weather.html',

  bindings: {
    showToast: '&',
    showLoader: '&'
  },

  controller: function (WeatherService, $scope) {
    'ngInject';

    /**
     * Get current weather for the supplied city
     */
    this.getWeather = (query) => {

      this.showLoader({show: true});

      WeatherService.get(query).then((data) => {

        // Save meteo data for the requested city
        this.data = data;

      }).catch((err) => {
        this.showToast({message: err});
      }).finally(() => {
        this.showLoader({show: false});
      });
    };

  }

});