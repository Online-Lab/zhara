'use strict';

angular.module('zharaApp')
  .directive('appFooter', function () {
    return {
      templateUrl: 'app/footer_directive/footer_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });