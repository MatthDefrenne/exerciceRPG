import { Component, OnInit } from '@angular/core';
import { SceneManagerService } from '../scene-manager.service';
import { UiManagerService } from '../ui-manager.service';

@Component({
  selector: 'app-attack-button',
  templateUrl: './attack-button.component.html',
  styleUrls: ['./attack-button.component.scss']
})
export class AttackButtonComponent implements OnInit {

  constructor(public sceneManagerService: SceneManagerService, public uiManager: UiManagerService) {

  }

  ngOnInit(): void {
  }

  AttackButton(){
    
    this.sceneManagerService.Player.MeleeAttack(this.sceneManagerService.Player, this.sceneManagerService.Creature, this.sceneManagerService.CombatScene.inProgress);
    this.sceneManagerService.CombatScene.creatureAttaque();
    this.sceneManagerService.CombatScene.nextRound();
    this.uiManager.WinnerIs();

  }
  
}
