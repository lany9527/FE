'use strict';

/**
 * @ngdoc directive
 * @name feApp.directive:headComponent
 * @description
 * # headComponent
 */
angular.module('feApp')
  .directive('headComponent', function () {
    return {
      templateUrl: 'views/common/header.html',
      restrict: 'EA',
      replace: true
      /*link: function postLink(scope, element, attrs) {
        element.text('this is the headComponent directive');
      }*/
    };
  });
