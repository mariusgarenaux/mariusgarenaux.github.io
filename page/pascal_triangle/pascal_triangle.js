import { Line } from "./line.js";
import { Element } from "./element.js"


export class Pasc_Triangle {
    constructor(ball_size, n, modulo){
        this.ball_size = ball_size;
        this.n = n;
        this.modulo = modulo;
        this.lines = new Array(n);
    }

    draw(context){
        this.lines.forEach((line) => line.draw(context, this.modulo));
    }

    add_line(rank){
        let last_line = this.lines[rank - 1];
        let new_x = last_line.x - this.ball_size/2;
        let new_y = last_line.y + this.ball_size;
        let new_line = new Line(rank, new_x, new_y);
        new_line.elements[0] = new Element(this.ball_size, 1, new_x, new_y);
        new_line.elements[rank] = new Element(this.ball_size, 1, new_x + rank*this.ball_size, new_y);
        for (let i = 1; i < rank; i++) {
            let new_value = (last_line.elements[i-1].value + last_line.elements[i].value)%this.modulo;
            let new_element = new Element(this.ball_size, new_value,new_x + i*this.ball_size, new_y);
            new_line.elements[i] = new_element;
          }
        this.lines[rank] = new_line;
    }

    create(){
        let first_line = new Line(0, 400, this.ball_size + 10);
        first_line.elements[0] = new Element(this.ball_size, 1, 400, this.ball_size + 10);
        this.lines[0] = first_line;

        for (let i = 1; i<this.n + 1; i++) {
            this.add_line(i);
        }
    }
}