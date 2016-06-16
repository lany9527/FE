'use strict';

describe('Controller: ItunesCtrl', function () {

  // load the controller's module
  beforeEach(module('feApp'));

  var ItunesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItunesCtrl = $controller('ItunesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ItunesCtrl.awesomeThings.length).toBe(3);
  });
});
