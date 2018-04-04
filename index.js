function createObj(name, phase, gender) {
  let obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  return obj
}
function getData(name) {
  let instructors =[
                    createObj('Akbar', 1, 'male'), 
                    createObj('Icha', 1, 'female'), 
                    createObj('Adhit', 2, 'male'), 
                    createObj('Tama', 2, 'male'), 
                    createObj('Rifky', 3, 'male')
                   ];
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