import { Component } from '@angular/core';
import {Choice} from './choice';
import {ChoiceComponent} from './choice/choice.component'
import {DataService} from './data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cyoa-an-elder-propose';

  constructor(public data:DataService){

  }
  
}
