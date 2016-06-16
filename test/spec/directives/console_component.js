'use strict';

describe('Directive: consoleComponent', function () {

  // load the directive's module
  beforeEach(module('feApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<console-component></console-component>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the consoleComponent directive');
  }));
});
