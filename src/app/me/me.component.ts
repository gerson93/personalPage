import { Component, OnInit } from '@angular/core';

import { DESCRIPTION } from "../shared/selfDescription";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  description = DESCRIPTION
  constructor() { }

  ngOnInit(): void {
  }

}
