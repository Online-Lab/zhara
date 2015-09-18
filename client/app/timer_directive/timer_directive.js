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
          var today = moment(),
              target = moment("2015-10-05 18-00", "YYYY-MM-DD HH-mm");//20 sep 2015

          return {
            d: target.diff(today, "days"),
            h: target.diff(today, "hours") % 24,
            m: target.diff(today, "minutes") % 60
          };
        }

        scope.time = getTime();
      }
    };
  });