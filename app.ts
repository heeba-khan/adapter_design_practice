export{}

interface Car{
    start():void;
}

class GasCar{
    engine():void{
        console.log("Start GasCar Engine !!");
    }
}

class ElectricCar{
    power():void{
        console.log("Power On for Electric Car !!");
    }
}

// const gasCar=new GasCar()
// const electricCar=new ElectricCar();
// gasCar.start();   -->will show error as property start does not exist on type 'GasCar'
// electricCar.start();   -->will show error as property start does not exist on type 'ElectricCar'

//! Now to make it work we need to create an adapter for GasCar and ElectricCar so that it conforms to our target interface i.e Car

//* Adapter for GasCar
class GasCarAdapter implements Car{
    private gasCar:GasCar

    constructor(gasCar:GasCar){
        this.gasCar=gasCar;
    }
    start():void{
        this.gasCar.engine()
    }
}

//* Adapter for ElectricCar
class ElectricCarAdapter implements Car{
    private electricCar:ElectricCar

    constructor(electricCar:ElectricCar){
        this.electricCar=electricCar;
    }
    start():void{
        this.electricCar.power()
    }
}

// const gasCar=new GasCar();
// const electricCar=new ElectricCar();
// const gasCarAdapter=new GasCarAdapter(gasCar)
// const electricCarAdapter=new ElectricCarAdapter(electricCar)

// gasCarAdapter.start();
// electricCarAdapter.start();



//! Now the question is can we make a generic adapter so that we don't need to make seperate adapter for each platforms or class like in this example


//* Generic Adapter
class GenericAdapter implements Car{
    private car:any;
    private startMethod:string;

    constructor(car:any,startMethod:string){
        this.car=car
        this.startMethod=startMethod
    }

    start():void{
        this.car[this.startMethod]()
    }
}


const gasCar=new GasCar();
const electricCar=new ElectricCar();
const gasCarAdapter=new GenericAdapter(gasCar,"engine")
gasCarAdapter.start();

const electricCarAdapter=new GenericAdapter(electricCar,"power")
electricCarAdapter.start();





