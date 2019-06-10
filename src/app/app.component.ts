import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   {
  name = 'Angular';
  time :string;

  constructor(){
    console.log(this.msToTime(28800000000000));
  }


   msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds  = (seconds < 10) ? "0" + seconds : seconds;

    this.time =  hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

updateTime(){
  console.log(this.time);
}
}
