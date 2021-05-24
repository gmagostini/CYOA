import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VoidSpaceComponent } from './void-space/void-space.component';
import { SwitchComponent } from './switch/switch.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChoiceBodyComponent } from './choice-body/choice-body.component';
import { NodeRenderComponent } from './node-render/node-render.component';
@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    TopBarComponent,
    VoidSpaceComponent,
    SwitchComponent,
    ChoiceBodyComponent,
    NodeRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
