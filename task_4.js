// задание 4
function ElectricalDevice(name) {
    this.name = name;
    this.showNominalPower = function() {
        console.log(`${this.power} W`);
    }
}

ElectricalDevice.prototype.plugIn = function() {
    this.switchon = true;
    console.log(`${this.name} подключён`);
}

ElectricalDevice.prototype.unplug = function() {
    this.switchon = false;
    console.log(`${this.name} отключён`);
}

function Lamp(name, power, amount) {
    this.name = name;
    this.power = power;
    this.switchon = false;
    this.getNumLamps = function() {
        console.log(`${amount} лампочек`);
    }
}

Lamp.prototype = new ElectricalDevice();

function Computer(name, power, num) {
    this.name = name;
    this.power = power;
    this.switchon = false;
    this.getSystemMemory = function() {
        console.log(`${num} гигабайт`);
    }
}

Computer.prototype = new ElectricalDevice();

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
