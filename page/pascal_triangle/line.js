export class Line {
    constructor(rank, x, y){
        this.rank = rank; //number of the line (starts at 0)
        this.x = x; //x position of the begining of the line
        this.y = y; //y position of the line
        this.elements = new Array(this.rank + 1); //each element of this array is an Element (cf element.js)
    }

    draw(context, modulo){
        this.elements.forEach( (element) => element.draw(context, modulo));
    }
}