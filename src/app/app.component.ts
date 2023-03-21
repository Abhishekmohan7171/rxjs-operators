import { Component } from '@angular/core';
import { map, mapTo, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';
  arr:number[]=[];
  res!:number;
  content:any
  constructor(private http: HttpClient){}

  observe(){
    console.log("observe started");

    of(1,2,3,4)
      .pipe(mapTo("Success"))
      .subscribe(console.log)

    // this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((v:any)=>console.log(v)) //printing the data

    this.content = this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(
      map((res:any) =>
        res.map((data:any) => {
          return{
            title:data.title,
            completed:data.completed
          }
    })))
  }


}
