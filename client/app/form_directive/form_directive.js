'use strict';

angular.module('zharaApp')
  .directive('appForm', function () {
    return {
      templateUrl: 'app/form_directive/form_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });