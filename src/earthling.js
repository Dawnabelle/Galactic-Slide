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

  betweenDatesInSeconds(date1, date2){
    let date1InSeconds = date1.getTime() / 1000;
    let date2InSeconds = date2.getTime() / 1000;
    return Math.round(Math.abs(date1InSeconds - date2InSeconds));
  }

  ageInEarthYears(){
    let yearsInSeconds = this.ageInSeconds();
    let yearsOnEarth = (yearsInSeconds / 31536000);
    // let yearsInMinutes = (yearsInSeconds / 60);
    // let yearsInHours = (yearsInMinutes / 60);
    // let yearsInDays = (yearsInHours / 24);
    // let yearsOnEarth = (yearsInDays / 365);
    return yearsOnEarth;
  }
}

export { Earthling };
