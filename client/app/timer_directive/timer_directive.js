'use strict';

angular.module('zharaApp')
  .directive('appTimer', function () {
    return {
      templateUrl: 'app/timer_directive/timer_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });