import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Playground';
  public textValue = 'write red, blue or yellow here';
  public ColorParent : string;

  public SetColor() {
    console.debug('The text value is: ' + this.textValue);
    this.ColorParent = this.textValue;
  }

  public ColorSelected(color: string){
    this.ColorParent = color;
  }

}


