var arr = [];

/*
PSEUDOCODE

1. pada fungsi createObj pasang name, phase, dan gender sebagai parameternya
2. lalu buat variabel berisi objek kosong
3. isi object kita dengan key sama dengan masing2 parameter kita dan isi yang sama juga
4. return arr
*/
function createObj(name, phase, gender) {
  var obj = {};
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  arr.push(obj);

  return arr;
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

/*
PSEUDOCODE

1. looping dari i = 0 sepanjang arr
  1.a. jika arr index ke i memiliki nama yang sama dengan parameter
  2.a. return array index ke i
2. selain itu return 'no such data'
*/

function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      return arr[i]
    }
  }
  return 'no such data'
}

console.log(getData('Icha'))
