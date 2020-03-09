import { Component } from '@angular/core';

@Component({
    selector: 'color-box',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.css']
})
export class ColorComponent{
    public Color: string;

    /**
     *
     */
    constructor() {
        this.Color = 'green';
    }

    public ChangeColor(color: string){
        this.Color = color;
    }




}
