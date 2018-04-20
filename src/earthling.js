class Earthling {
// creates birthdate constructor
  constructor(birthdate){
    this.birthdate = birthdate;
  }

// calculates age in seconds
  ageInSeconds(){
    // date.now() calls the current date to the millasecond
    let now = Date.now();
    // getTime() calls the users birthday and generates an answer to the second
    let ageInMilSeconds = this.birthdate.getTime();
    // round to nearest absolute number convs mils to secs by div by 1000 leaving no decimal
    return Math.round(Math.abs((ageInMilSeconds - now) / 1000));
  }
}

export { Earthling };
