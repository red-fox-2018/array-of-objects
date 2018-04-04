var arr = [];
function createObj(name, phase, gender) {
  let tempObj = {}
  tempObj.name = name;
  tempObj.phase = phase;
  tempObj.gender = gender;
  arr.push(tempObj);
}

createObj('restu', 1, 'male');
createObj('ahmad', 1, 'male');
createObj('julia', 1, 'female')


function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
}
console.log(getData('restu'));
