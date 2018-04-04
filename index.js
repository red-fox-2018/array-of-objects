//RELEASE 0
var arr = []
function createObj(name, phase, gender){
  var obj = {
    name:name,
    phase:phase,
    gender:gender
  }

  arr.push(obj)

}

createObj('akbar', 1, 'male')
createObj('icha', 1, 'female')
createObj('adhit', 2, 'male')
createObj('tama', 2, 'male')
createObj('rifky', 3, 'male')

console.log(arr)

//RELEASE 1
function getData(name){
  // console.log(arr)
  for(let i=0; i<arr.length; i++){
    // console.log(arr[i].name)
    if(arr[i].name === name){
      return arr[i]
    }
  }
}

console.log(getData('icha'))
