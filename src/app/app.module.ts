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
import { IconsComponent } from './icons/icons.component';
import { ColorsComponent } from './colors/colors.component';
import { AppNameComponent } from './app-name/app-name.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonsComponent,
    TypographyComponent,
    IconsComponent,
    ColorsComponent,
    AppNameComponent,
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
