var car1 = {
    name: 'BMW 3',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 2.01,
        horsePower: 156,
        isTurnOn: false,
    },
    start: function() {
        this.isTurnOn = true;
        this.speed = 10;
        this.engine.isTurnOn = true;
    }
}
