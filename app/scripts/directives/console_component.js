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
      replace: true
      /*link: function postLink(scope, element, attrs) {
        element.text('this is the consoleComponent directive');
      }*/
    };
  });
