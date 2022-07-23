import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hosting-demo';

  diff: number;
  mul: number;
  readcal:number;
  total: number;
  constructor() {
    this.diff = 0;
    this.mul=8;
    this.readcal=0;
 }
  
  onSubmit(form: NgForm) {
    var num=[];
    num[0] = form.controls.reading1.value 
    num[1] = form.controls.reading2.value 
     this.diff = num[0]-num[1];
    console.log(this.diff);
this.readcal = this.diff * this.mul
    this.total = 7000 +this.readcal 
    console.log(this.total);

}
}
