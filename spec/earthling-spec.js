import  { Earthling } from './../src/earthling';

describe('Earthling', function() {
  let myEarthling = new Earthling(new Date('Nov, 14, 1981'));

  // check to make sure the result is a number
  it('should return age in seconds as a number', function() {
    expect(typeof myEarthling.ageInSeconds()).toEqual('number');
  });

  it('should return the different between two dates in seconds', function(){

    let timePassed = 1149634800
    console.log(myEarthling.betweenDatesInSeconds(new Date('Nov, 14, 1981'), new Date('Apr, 20, 2018')));

    expect(myEarthling.betweenDatesInSeconds(new Date('Nov, 14, 1981'), new Date('Apr, 20, 2018'))).toEqual(timePassed);
  })
});
