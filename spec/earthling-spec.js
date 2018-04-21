import  { Earthling } from './../src/earthling';

describe('Earthling', function() {
  let myEarthling = new Earthling(new Date('Nov, 14, 1981'), 85 );

  it('should return age in seconds as a number', function() {
    expect(typeof myEarthling.ageInSeconds()).toEqual('number');
  });

  it('should return the different between two dates in seconds', function(){
    let timePassed = 1149634800;
    expect(myEarthling.betweenDatesInSeconds(new Date('Nov, 14, 1981'), new Date('Apr, 20, 2018'))).toEqual(timePassed);
  });

  it ('should return age in Earth years', function(){
    expect(myEarthling.ageInEarthYears()).toBeLessThan(37);
  });

  it('should return age in Mercury years', function(){
    expect(myEarthling.ageInMercuryYears()).toBeLessThan(37 * .24);
  });

  it('should return age in Venus years', function(){
    expect(myEarthling.ageInVenusYears()).toBeLessThan(37 * .62);
  });

  it('should return age in Mars years', function(){
    expect(myEarthling.ageInMarsYears()).toBeLessThan(37 * 1.88);
  });

  it('should return age in Jupiter years', function(){
    expect(myEarthling.ageInJupiterYears()).toBeLessThan(37 * 11.86);
  });

  it('should return amount of life left to live on Mercury, based on life expectancy', function(){
    let yearsLeft = myEarthling.yearsLeftToLive('mercury');
    expect(Math.ceil(yearsLeft)).toEqual(77);
  });

  it('should return amount of life left to live on Venus, based on life expectancy', function(){
    let yearsLeft = myEarthling.yearsLeftToLive('venus');
    expect(Math.ceil(yearsLeft)).toEqual(63);
  });

  it('should return number of years past life expectancy', function(){
    let yearsLeft = myEarthling.yearsLeftToLive('jupiter');
    expect(yearsLeft).toBeLessThan(0);
  });

});
