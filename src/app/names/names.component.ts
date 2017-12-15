import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  @Output() eventFromOutter = new EventEmitter<string>();

  nameList = ['Shijith','Sinju','Tara'];
  name : string = '';

  constructor() { }

  ngOnInit() {
  }

  eventFromInner(passed:string){
    this.name = passed;
    this.eventFromOutter.emit(this.name);
  }

}
