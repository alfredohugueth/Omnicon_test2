import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barra-superior',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed=true;

  constructor() { }

  ngOnInit(): void {
  }

}
