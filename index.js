var arr = []

function createObj(name, phase, gender) {

  arr.push({
    name: name,
    phase: phase,
    gender: gender
  })

}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr);

function getData(name) {

  for (var i = 0; i < arr.length; i++) {
    if ((arr[i].name).toLowerCase() == name.toLowerCase()) {
      console.log(`\nData =>`);
      return arr[i]
    }
  }

  return `\n name is not valid !`

}

console.log(getData('icha'));
