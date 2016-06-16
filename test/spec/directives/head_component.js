'use strict';

describe('Directive: headComponent', function () {

  // load the directive's module
  beforeEach(module('feApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<head-component></head-component>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the headComponent directive');
  }));
});
