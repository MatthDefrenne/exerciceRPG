import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CombatSceneComponent } from './app.component';
import { HealthbarComponent } from './healthbar/healthbar.component';

@NgModule({
  declarations: [
    CombatSceneComponent,
    HealthbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CombatSceneComponent]
})
export class AppModule { }
