import { Component } from '@angular/core';

@Component({
    selector: 'component-interaction',
    templateUrl: './component-interaction.component.html',
    styleUrls: ['./component-interaction.component.css']
})

export class ComponentInteraction
{
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