'use strict';

/**
 * The Weather component
 */
angular.module('app').component("webcam", { // On vient là grace à index.js qui lui même vient de app.js

  templateUrl: '/js/components/webcam/webcam.html', // Tu agira dans le template weather.html

  bindings: { // ???
    showToast: '&',
    showLoader: '&'
  },

  controller: function (WebcamService, $rootScope) { // on déclare un objet controller : qui à pour valeur une fonction qui prend en paramètre 
    // notre service, ainsi que le scope qui est en faite la ville que l'on veut.
    'ngInject'; // Impact sur l'autre ngInject ?

    this.$onInit = () => {
      $rootScope.$on('GET_WEBCAMS', (msg, lat, lon) => {
        WebcamService.getWebcam(lat, lon, 5).then((webcams) => {

          this.webcams = webcams;
          this.webcams.splice(1, 7);

        }).catch((err) => {
          this.showToast({
            message: err
          });
        }).finally(() => {
          this.showLoader({
            show: false
          });
        });
      })
    }
  }
});