import { SceneManagerService } from './scene-manager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class CombatSceneComponent {

  constructor(public sceneManagerService: SceneManagerService) {

  }
}
