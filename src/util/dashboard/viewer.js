class PointerViewer {
    constructor(ctx) {
        this.ctx = ctx;
    }
    show(pointer) {

    }
}
class ClibrationViewer {
    
 }
class DashBoardViewer {
    constructor(ctx) {
        this.ctx = ctx;
    }
    init(dashboard) {
        this.db = dashboard;
        dashboard.setPointerViewer(v => {
            v = new PointerViewer(this.ctx)
        });
        dashboard.setCalibrationViewer(v => {
            v = new ClibrationViewer(this.ctx);
        });
    }
    show() {
        this.ctx.clearRect(0, 0, this.db.width, this.db.height);
        this.drawDashBoard();
    }
    drawDashBoard() {
        this.ctx.beginPath();
        this.ctx.arc(this.db.position.x, this.db.position.y, 0, Math.PI * 2, false);
        this.ctx.strokeStyle = this.db.color;
        this.ctx.stroke();
    }
}