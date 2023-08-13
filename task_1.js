// задание 1
const protObj = {
    a: 654,
    woods: 'black',
    desert: 'enormous',
}

const newObj = Object.create(protObj);

newObj.name = 'Sahara';

function checkOwnProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ - ${key}, значение - ${obj[key]}`)
        }
    }
}

checkOwnProp(newObj);
