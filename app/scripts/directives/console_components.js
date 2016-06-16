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
      //replace: true
      //template: '<div>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</div>'
      /*restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the consoleComponents directive');
      }*/
    };
  });
