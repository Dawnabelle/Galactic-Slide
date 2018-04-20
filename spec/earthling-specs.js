import { Earthling } from './../js/earthling';

describe('Earthling', function() {
  const birthdate = new Birthdate("1981", "11", "14")
  let myEarthling = new Earthling(birthdate);

  it('should calculate age by subtracting input birthay from current date', function() {
    myEarthling.calcAge();
    expect(myEarthling.birthdate).notToEqual('');
    expect(myEarthling.calcAge).toBeLessThan(37);
  });
});
