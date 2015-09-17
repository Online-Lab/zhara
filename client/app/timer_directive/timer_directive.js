'use strict';

angular.module('zharaApp')
  .directive('appTimer', function ($interval, dateFilter) {
    return {
      templateUrl: 'app/timer_directive/timer_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var timeoutId;

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function(){
          updateTime();
        }, 1000);

        element.on('$destroy', function(){
          $interval.cancel(timeoutId);
        });

        var updateTime = function(){
          scope.time = getTime();
        }

        var getTime = function(){
          var time = new Date();

          return {
            d: time.getDate(),
            h: time.getHours(),
            m: time.getMinutes(),
            s: time.getSeconds()
          };
        }

        scope.time = getTime();
      }
    };
  });