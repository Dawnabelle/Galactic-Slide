import { Earthling } from './../src/earthling';

describe('Earthling', function() {
  let myEarthling = new Earthling(new Date('Nov, 14, 1981'));

  // check to make sure the result is a number
  it('should return age in seconds as a number', function() {
    expect(typeof myEarthling.ageInSeconds()).toEqual('number');
  });
});
