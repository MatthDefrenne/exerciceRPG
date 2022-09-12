import { Component, OnInit } from '@angular/core';
import { SceneManagerService } from '../scene-manager.service';

@Component({
  selector: 'app-attack-button',
  templateUrl: './attack-button.component.html',
  styleUrls: ['./attack-button.component.scss']
})
export class AttackButtonComponent implements OnInit {

  constructor(public sceneManagerService: SceneManagerService) {

  }

  ngOnInit(): void {
  }

  AttackButton(){
    this.sceneManagerService.Player.MeleeAttack(this.sceneManagerService.Player, this.sceneManagerService.Creature);
  }
  
}
