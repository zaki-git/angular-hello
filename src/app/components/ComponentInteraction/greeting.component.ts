import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'greeting',
    templateUrl: './greeting.component.html',
    styleUrls: ['./greeting.component.css']
    
})
export class GreetingComponent {
    time : any;
    @Output() colorEmitter = new EventEmitter<string>();

    constructor(){
        this.time = (new Date()).toLocaleTimeString();
    }

    public updateTime() : void {
        this.time = (new Date()).toLocaleTimeString();
    }


    public ColorRed(){
        this.colorEmitter.emit('red');
    }

    public ColorBlue(){
        this.colorEmitter.emit('blue');
    }

    public ColorYellow(){
        this.colorEmitter.emit('yellow');
    }
}

