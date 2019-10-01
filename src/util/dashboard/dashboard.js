export class Dashboard {
    pointer;
    calibration = [];
    position;
    count = 20;
    canvas;
    radius = 100;
    ctx;
    option;
    speed = 1;
    color = '#f00';
    constructor(radius, position = {
        x: 100,
        y: 100
    }) {
        this.radius = radius;
        this.position = position;
        this.init();
    }
    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.height = this.radius;
        this.canvas.width = this.radius;
        this.canvas.style.position = 'absolute';
        this.canvas.style.right = 10 + 'px';
        this.canvas.style.top = 10 + 'px';
        this.ctx = this.canvas.getContext('2d');
        this.pointer = new Pointer(this.center);
        document.body.append(this.canvas);

        console.log('init')
        while (this.count--) {
            this.calibration.push(new Calibration());
        }
        this.drawDashboard();
    }

    drawDashboard() {
        this.clearDashboard();
        this.drawCalibrations();
        // begin dashboard
        this.ctx.beginPath();
        this.ctx.arc(this.position.x / 2, this.position.y / 2, this.radius / 2, 0, Math.PI * 2, false);
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        this.ctx.closePath();
        // end
        this.pointer.draw(this.ctx);
    }
    clearDashboard() {
        this.ctx ? this.ctx.clearRect(0, 0, this.width, this.height) : false;
    }
    drawCalibrations() {
        this.calibration.forEach(c => {
            c.draw(this.ctx);
        })
    }
    setPointerValue(value) {
        var rest = value - this.pointer.value;
        while (rest -= this.speed) {
            this.pointer.value += this.speed;
            this.drawDashboard();
        }
        this.pointer.value = value;
        this.drawDashboard();
    }
}

class Calibration {
    position;
    color;
    radius;
    constructor() { }
    draw(ctx) {

    }
}

class Pointer {
    center;
    value = 0;
    color;
    constructor(center) {
        this.center = center;
    }
    draw(ctx) {

    }
}