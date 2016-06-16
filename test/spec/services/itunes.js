'use strict';

describe('Service: itunes', function () {

  // load the service's module
  beforeEach(module('feApp'));

  // instantiate service
  var itunes;
  beforeEach(inject(function (_itunes_) {
    itunes = _itunes_;
  }));

  it('should do something', function () {
    expect(!!itunes).toBe(true);
  });

});
