let arr = []
function createObj(name,phase,gender) {
  arr.push({'name':name,'phase':phase,'gender':gender})
}
createObj('Akbar',1,'male')
createObj('Icha',2,'female')
console.log('Ini data awal');
console.log(arr);

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      return arr[i]
    }
  }
  return 'Data tidak ditemukan'
}
console.log('Ini hasil');
console.log(getData('Icha'));
