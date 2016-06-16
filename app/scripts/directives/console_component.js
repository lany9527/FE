'use strict';

/**
 * @ngdoc directive
 * @name feApp.directive:consoleComponent
 * @description
 * # consoleComponent
 */
angular.module('feApp')
  .directive('consoleComponent', function () {
    return {
      templateUrl: 'views/common/console.html',
      restrict: 'EA',
      //replace: true
    };
  });
