/*


@ Iswanul Umam - Red Fox
*/

let arr = [];

function createObj(name, phase, gender) {
  let persons = { name, phase, gender };
  arr.push(persons);
}

function getData(name) {
  let result;
  for (let i of arr) {
    if (i.name == name) {
      result = i;
    }
  }
  return result;
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

console.log(getData('Icha'));