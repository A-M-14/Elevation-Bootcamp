class Vehicle {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this._speed = speed;
    }

     set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
}


let kia = new Vehicle(12,15,100);

kia.speed = 50;

console.log(kia._speed)