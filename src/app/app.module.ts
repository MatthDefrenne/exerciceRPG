import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CombatSceneComponent } from './app.component';
import { HealthbarComponent } from './healthbar/healthbar.component';
import { AttackButtonComponent } from './attack-button/attack-button.component';

@NgModule({
  declarations: [
    CombatSceneComponent,
    HealthbarComponent,
    AttackButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CombatSceneComponent]
})
export class AppModule { }
