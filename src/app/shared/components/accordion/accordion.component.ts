import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  color1:string = '#FFFFFF';
  color2:string = '#000000';
  color3:string = '#4D2AFF';
  color4:string = '#E4C297';
  color5:string = '#FF0202';
  color6:string = '#BBBABA';
  constructor() { }

  ngOnInit(): void {
  }

}
