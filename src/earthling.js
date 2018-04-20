class Earthling {
  constructor(birthdate){
    this.birthdate = birthdate;
  }

  calcAge(){
    const date = Date.now();
    let age = (date - this.birthday);
    this.age = (age / 33155695200);
  }
}

export { Earthling }
