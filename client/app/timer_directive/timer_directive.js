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
              target = moment([2015,8,19,20,0,0,0]);//20 sep 2015
          //var time = today.to(target);

          return {
            d: target.diff(today, "days"),
            h: target.diff(today, "hours"),
            m: target.diff(today, "minutes"),
            s: target.diff(today, "seconds")
          };
        }

        scope.time = getTime();
      }
    };
  });