import { Component } from '@angular/core';
import { NgLog } from './log';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgLog()
export class AppComponent {
  title = 'photo-competition';
  userName1 = 'ddssd';
}
