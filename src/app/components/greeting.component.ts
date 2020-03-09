import { Component } from '@angular/core';

@Component({
    selector: 'greeting',
    templateUrl: './greeting.component.html',
    styleUrls: ['./greeting.component.css']
    
})
export class GreetingComponent {
    time : any;

    constructor(){
        this.time = (new Date()).toLocaleTimeString();
    }

    public updateTime() : void {
        this.time = (new Date()).toLocaleTimeString();
    }


    public ColorRed(){
    }

    public ColorBlue(){
    }

    public ColorYellow(){
    }
}

