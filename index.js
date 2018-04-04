var arr = []
function createObj(name, phase, gender) {
    var profile = {}
    profile.name = name
    profile.phase = phase
    profile.gender = gender
    arr.push(profile)
    return arr
}

function getData(name) {
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==name){
            return arr[i]
        }
    }
}

createObj('Akbar',1,'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
console.log(getData('Icha'))