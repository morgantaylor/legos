import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { IconComponent } from './buttons/icon/icon.component';
import { StatesComponent } from './buttons/states/states.component';
import { GroupsComponent } from './buttons/groups/groups.component';
import { DropdownsComponent } from './buttons/dropdowns/dropdowns.component';
import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
    ButtonsComponent,
    TypographyComponent,
    ColorsComponent,
    IconComponent,
    StatesComponent,
    GroupsComponent,
    DropdownsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
