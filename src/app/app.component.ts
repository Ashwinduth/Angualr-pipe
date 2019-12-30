import { Component } from '@angular/core';
import { Apiservice } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Happy New Year';

  name = "Lakkepuram"

  private person = {
    "first": "Ashwin Duth",
    "last": "Lakkepuram"
  }

  private response: any;
  public data = new Date();

  constructor(private content: Apiservice) {

  }
  getuser() {
    var that = this;
    this.content.fetchuser().subscribe(function (res) {
      that.response = res;
      console.log(res)
    })
  }
}