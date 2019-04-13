import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pure-scss-chart';

  points = [];
  newPoints = [];
  datePoints = [];
  highestValor: number = 0;

  constructor() { }

  ngOnInit() {
    this.getPeriod();
  }

  getPeriod() {
    const days = Math.floor(Math.random() * 30) + 5;
    this.highestValor = 0;
    this.points = [];
    let pointsArray: number[] = [];
    pointsArray = Array.of();
    for (let i = 0; i < days; i++) {
      pointsArray.push(Math.trunc(Math.random() * 19));
    }

    const barsToSkip = (pointsArray.length / 10);
    let sizeInPx;
    let displayValue;
    pointsArray.forEach((n: number) => { this.highestValor = this.highestValor < n ? n : this.highestValor });
    for (let n = 0; n < pointsArray.length; n++) {
      displayValue = true;
      sizeInPx = Math.trunc((pointsArray[n] * 180) / this.highestValor);
      this.points.push({ points: pointsArray[n], valueInPixel: sizeInPx, displayValue });
    }
    this.points.reverse();
  }

}
