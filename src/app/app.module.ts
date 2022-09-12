import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CombatSceneComponent } from './app.component';

@NgModule({
  declarations: [
    CombatSceneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CombatSceneComponent]
})
export class AppModule { }
