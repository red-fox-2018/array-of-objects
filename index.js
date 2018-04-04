var arr = [];

function createObj(name, phase, gender) {
    return {
        name: name,
        phase: phase,
        gender: gender
    }
}

function getData(name) {
    let result;
    arr.forEach(data => {
        if (data.name === name) {
            result = data;
        }
    })

    return result;
}

arr.push(createObj('Akbar', 1, 'male'));
arr.push(createObj('Icha', 1, 'female'));
arr.push(createObj('Adhit', 2, 'male'));
arr.push(createObj('Tama', 2, 'male'));
arr.push(createObj('Rifky', 3, 'male'));

console.log(arr);
console.log();
console.log(getData('Icha'));