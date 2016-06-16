'use strict';

/**
 * @ngdoc directive
 * @name feApp.directive:consoleComponents
 * @description
 * # consoleComponents
 */
angular.module('feApp')
  .directive('consoleComponents', function () {
    return {
      templateUrl: 'views/common/console.html',
      restrict: 'EA'
    };
  });
