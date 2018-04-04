var arr = []

function createObj(name, phase, gender) {
  var obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  return arr.push(obj)
}

function getData(name) {
  for(let i in arr) {
    if(arr[i].name === name) {
      return arr[i]
    }
  }
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
console.log(getData('Icha'));
