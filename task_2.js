// задание 2
const obj1 = {
    a: 654,
    woods: 'black',
    desert: 'enormous',
}

function checkProp(str, obj) {
    return str in obj;
}

console.log(checkProp('woods', obj1));