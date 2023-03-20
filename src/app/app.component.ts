import { Component } from '@angular/core';
import { map, mapTo, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  arr:number[]=[];
  res!:number;

  observe(){
    console.log("observe started")

    of(1,2,3,4)
      .pipe(mapTo("Success"))
      .subscribe(console.log)
  }


}
