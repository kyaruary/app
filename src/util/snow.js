export class Snow {
    constructor(canvas) {
        this.canvas = canvas;
        this.init()
    }

    init() {
        this.isReady = false;
        this.img = document.createElement('img');
        var r = Math.floor(Math.random() * 20);
        if (r >= 18) {
            this.img.src = '/picture/secret/snow_big.png';
            this.vy = Math.random() * 0.3 + 0.15;
        } else if (r > 13 && r < 18) {
            this.img.src = '/picture/secret/snow_middle.png';
            this.vy = Math.random() * 0.5 + 0.1;
        } else {
            this.img.src = '/picture/secret/snow_small.png';
            this.vy = Math.random() * 0.5 + 0.05;
        }
        this.img.onload = () => {
            this.isReady = true;
        }
        this.x = Math.random() * this.canvas.width;
        this.y = -10;
        this.vx = Math.random() * 1 - 0.5;
    }
    move(ctx) {
        if (this.isReady) {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.0001;
            if (this.y > this.canvas.height * 0.9 - 20 || this.x > this.canvas.width || this.x < -2) {
                this.init();
            }
            ctx.drawImage(this.img, this.x, this.y, this.img.width / 2, this.img.height / 2);
        } else { return false }
    }
}

export class AnimationFactory {
    snows = [];
    count = 50;
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.style.position = 'absolute';
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.canvas.style.zIndex = 0;
        this.canvas.style.top = 0;
        this.canvas.style.right = 0;
        this.ctx = this.canvas.getContext('2d');
        while (this.count--) {
            this.snows.push(new Snow(this.canvas));
        }
        document.body.appendChild(this.canvas);
    }
    animate = () => {
        this.clearCanvas();
        this.snows.forEach(s => s.move(this.ctx));
        this.t = window.requestAnimationFrame(this.animate);
    }
    destoryAnimation() {
        this.canvas.remove();
        window.cancelAnimationFrame(this.t);
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}