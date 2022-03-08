import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/usersAddress';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address?: Address;
  constructor() { }

  ngOnInit(): void {
  }

}
