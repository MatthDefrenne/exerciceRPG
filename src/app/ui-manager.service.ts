import { Injectable } from '@angular/core';
import { SceneManagerService } from './scene-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UiManagerService {

  constructor(public sceneManagerService: SceneManagerService) { }

  WinCond(){
    if(this.sceneManagerService.Player._isAlive == false){
      alert("YOU LOSE");
      this.sceneManagerService.CombatScene.inProgress = false;
    }
    if(this.sceneManagerService.Creature._isAlive == false){
      alert("YOU WIN");
      this.sceneManagerService.CombatScene.inProgress = false;
    }

  }
}
