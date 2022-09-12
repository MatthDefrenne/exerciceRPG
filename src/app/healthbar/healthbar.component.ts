import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-healthbar',
  templateUrl: './healthbar.component.html',
  styleUrls: ['./healthbar.component.scss']
})
export class HealthbarComponent implements OnInit {

  @Input() hp = 0;
  public pourcentage = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
