import { Injectable } from '@angular/core';
import { SceneManagerService } from './scene-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UiManagerService {

  

  constructor(public sceneManagerService: SceneManagerService) {

  }

  WinnerIs(){
    if(!this.sceneManagerService.Player._isAlive){
      this.sceneManagerService.CombatScene.inProgress = false;
      alert("Vous avez perdue")
    }
    if(!this.sceneManagerService.Creature._isAlive){
      this.sceneManagerService.CombatScene.inProgress = false;
      alert("Vous avez Gagner")
    }
  }
}
