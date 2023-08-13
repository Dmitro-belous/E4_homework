// задание 5
class ElectricalDevice {
    constructor(name) {
        this.name = name;
    }

    plugIn(){
        this.switchon = true;
        console.log(`${this.name} подключён`);
    }
    unplug(){
        this.switchon = false;
        console.log(`${this.name} отключён`);
    }

    showNominalPower() {
        console.log(`${this.power} W`);
    }
}


class Lamp extends ElectricalDevice {
    constructor(name, power, amount) {
        super(name);
        this.power = power;
        this.amount = amount;
    }
    getNumLamps() {
        console.log(`${this.amount} лампочек`);
    }
}


class Computer extends ElectricalDevice {
    constructor(name, power, num) {
        super(name);
        this.power = power;
        this.num = num;
    }
    getSystemMemory() {
        console.log(`${this.num} гигабайт`);
    }
}


function sumPower(devices){
    let sum = 0;
    for(let value of devices){
        if (value.switchon){
            sum += value.power;
        }
    }
    return `Суммарная мощность: ${sum} W`;
}

const supra = new Lamp('supra', 60, 10);

console.log(supra);
supra.plugIn();
supra.getNumLamps();
supra.showNominalPower();

const asus = new Computer('asus', 500, 4);

console.log(asus);
asus.plugIn();
asus.getSystemMemory();
asus.showNominalPower();

let devList = [supra, asus];
console.log(sumPower(devList));