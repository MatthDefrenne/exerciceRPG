import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-healthbar',
  templateUrl: './healthbar.component.html',
  styleUrls: ['./healthbar.component.scss']
})
export class HealthbarComponent implements OnInit {

  @Input() health: number = 0;
  @Input() maxHealth: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calculatePourcentageRemaning() {
    return this.health / this.maxHealth  * 100;
  }

}
