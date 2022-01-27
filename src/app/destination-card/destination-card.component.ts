import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent implements OnInit {
  @Input() destination: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
