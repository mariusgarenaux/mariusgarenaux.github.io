export class Element {
    constructor(size, value, x, y){
        this.size = size;
        this.value = value;
        this.x = x;
        this.y = y;
    }

    draw(context, modulo){
        context.beginPath();
        let test = 'rgba(51, 170, 51,' + opacity(this.value, modulo) + ')';
        context.fillStyle = test;
        //context.fillStyle  = 'black';
        context.arc(this.x, this.y, this.size/2, 0, Math.PI*2);
        context.fill();
        context.closePath();

    }
}

function opacity(value, modulo) {
   return String(value/modulo);
}
function opacity_2(value, modulo) {
   if (value<modulo/2) {
      return String(2*value/modulo);
   }
   else {
      return String(2-2*value/modulo);
   }
}
