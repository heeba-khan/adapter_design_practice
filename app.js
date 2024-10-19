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
// const gasCar=new GasCar();
// const electricCar=new ElectricCar();
// const gasCarAdapter=new GasCarAdapter(gasCar)
// const electricCarAdapter=new ElectricCarAdapter(electricCar)
// gasCarAdapter.start();
// electricCarAdapter.start();
//! Now the question is can we make a generic adapter so that we don't need to make seperate adapter for each platforms or class like in this example
//* Generic Adapter
var GenericAdapter = /** @class */ (function () {
    function GenericAdapter(car) {
        this.car = car;
    }
    GenericAdapter.prototype.start = function () {
        this.car.start();
    };
    return GenericAdapter;
}());
var gasCar = new GasCarAdapter(new GasCar());
var electricCar = new ElectricCarAdapter(new ElectricCar());
var car1 = new GenericAdapter(gasCar);
car1.start();
var car2 = new GenericAdapter(electricCar);
car2.start();
