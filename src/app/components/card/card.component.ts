import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user?: User;
  
  constructor() { }

  ngOnInit(): void {
  }
}
