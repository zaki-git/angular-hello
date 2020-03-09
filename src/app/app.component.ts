import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Playground';
  public textValue = 'some text';

  public SetColor() {
    console.debug('THe text value is: ' + this.textValue);
  }

}


