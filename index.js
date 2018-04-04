function getData(name) {
  let instructors = [{
    name: 'Akbar',
    phase: 1,
    gender: 'male'
  }, {
    name: 'Icha',
    phase: 1,
    gender: 'female'
  }, {
    name: 'Adhit',
    phase: 2,
    gender: 'male'
  }, {
    name: 'Tama',
    phase: 2,
    gender: 'male'
  }, {
    name: 'Rifky',
    phase: 3,
    gender: 'male'
  }];
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.toLowerCase() === name.toLowerCase()) {
      return instructors[i];
    }
  }
}

console.log(getData('icha'));

/* {
  name: 'Icha',
  phase: 1,
  gender: 'female'
} */