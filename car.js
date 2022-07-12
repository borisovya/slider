function Car1(name) {
    this.name = name;
    this.isTurnOn = false,
    this.speed = 0,
    this.engine = {
        v: 2.01,
        horsePower: 156,
        isTurnOn: false,
    };
    
};

Car1.prototype.start = function() {
    this.isTurnOn = true;
    this.speed = 10;
    this.engine.isTurnOn = true;
    console.log(this.name, ' ', this.speed);
}

var reno = new Car1('reno');
reno.start();
var bmw = new Car1('bmw');
bmw.start();
bmw.speed = 120;
console.log('bmw speed = ', bmw.speed);