var GasCar = /** @class */ (function () {
    function GasCar() {
    }
    GasCar.prototype.engine = function () {
        console.log("Start GasCar Engine !!");
    };
    return GasCar;
}());
var ElectricCar = /** @class */ (function () {
    function ElectricCar() {
    }
    ElectricCar.prototype.power = function () {
        console.log("Power On for Electric Car !!");
    };
    return ElectricCar;
}());
// const gasCar=new GasCar()
// const electricCar=new ElectricCar();
// gasCar.start();   -->will show error as property start does not exist on type 'GasCar'
// electricCar.start();   -->will show error as property start does not exist on type 'ElectricCar'
//! Now to make it work we need to create an adapter for GasCar and ElectricCar so that it conforms to our target interface i.e Car
//* Adapter for GasCar
var GasCarAdapter = /** @class */ (function () {
    function GasCarAdapter(gasCar) {
        this.gasCar = gasCar;
    }
    GasCarAdapter.prototype.start = function () {
        this.gasCar.engine();
    };
    return GasCarAdapter;
}());
//* Adapter for ElectricCar
var ElectricCarAdapter = /** @class */ (function () {
    function ElectricCarAdapter(electricCar) {
        this.electricCar = electricCar;
    }
    ElectricCarAdapter.prototype.start = function () {
        this.electricCar.power();
    };
    return ElectricCarAdapter;
}());
var gasCar = new GasCar();
var electricCar = new ElectricCar();
var gasCarAdapter = new GasCarAdapter(gasCar);
var electricCarAdapter = new ElectricCarAdapter(electricCar);
gasCarAdapter.start();
electricCarAdapter.start();
