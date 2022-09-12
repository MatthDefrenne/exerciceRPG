import { Component, OnInit } from '@angular/core';
import { SceneManagerService } from '../scene-manager.service';
import { UiManagerService } from '../ui-manager.service';

@Component({
  selector: 'app-attack-button',
  templateUrl: './attack-button.component.html',
  styleUrls: ['./attack-button.component.scss']
})
export class AttackButtonComponent implements OnInit {
  canAttack = true;

  constructor(public sceneManagerService: SceneManagerService, public UiManagerService: UiManagerService) {

  }

  ngOnInit(): void {
  }

  AttackButton(){
    if(this.canAttack && this.sceneManagerService.CombatScene.inProgress)
    {
      this.AttackSequence();
      this.canAttack = false;
      setTimeout(() => {
        this.canAttack = true;
      }, 2000);
    }
    else return console.log('Cannot attack yet');
  }

  AttackSequence(){
    this.sceneManagerService.Player.MeleeAttack(this.sceneManagerService.Player, this.sceneManagerService.Creature);

      setTimeout(() => {
        this.sceneManagerService.Creature.MeleeAttack(this.sceneManagerService.Creature, this.sceneManagerService.Player);
      }, 1000);
  
      setTimeout(() => {
        this.sceneManagerService.CombatScene.nextRound();
      }, 2000);
        
        setTimeout(() => {
          this.UiManagerService.WinCond();
        }, 2000);
  }
  
}
