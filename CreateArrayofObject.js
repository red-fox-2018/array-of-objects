var arr = [];
var createObj = function(name,phase,gender){
    let obj = {};
    obj.name = name;
    obj.phase = phase;
    obj.gender = gender;
    arr.push(obj);
    return arr;
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Anugrah',1,'male');
createObj('Alisa',1,'female');

var getData = function(name){
    for(let i=0;i<arr.length;i++){
        if(arr[i].name === name){
            return arr[i];
        }
    }
}
console.log(getData('Anugrah'))