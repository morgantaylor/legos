import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNameComponent } from './app-name/app-name.component';
import { AppRoutingModule } from './app-routing.module';

import { SidebarComponent } from './sidebar/sidebar.component';

import { ButtonsComponent } from './buttons/buttons.component';
import { IconComponent } from './buttons/icon/icon.component';
import { StatesComponent } from './buttons/states/states.component';
import { GroupsComponent } from './buttons/groups/groups.component';
import { DropdownsComponent } from './buttons/dropdowns/dropdowns.component';

import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { ColorsComponent } from './colors/colors.component';

import { InputsComponent } from './inputs/inputs.component';
import { SelectsComponent } from './inputs/selects/selects.component';
import { InputGroupsComponent } from './inputs/input-groups/input-groups.component';
import { CheckboxesComponent } from './inputs/checkboxes/checkboxes.component';
import { RadiosComponent } from './inputs/radios/radios.component';
import { SwitchesComponent } from './inputs/switches/switches.component';
import { LightSwitchComponent } from './inputs/switches/light-switch/light-switch.component';
import { SlideSwitchComponent } from './inputs/switches/slide-switch/slide-switch.component';
import { FlipSwitchComponent } from './inputs/switches/flip-switch/flip-switch.component';
import { ToggleSwitchComponent } from './inputs/switches/toggle-switch/toggle-switch.component';

import { TabsComponent } from './tabs/tabs.component';

import { TablesComponent } from './tables/tables.component';
import { StripedComponent } from './tables/striped/striped.component';
import { BorderedComponent } from './tables/bordered/bordered.component';

import { TooltipsComponent } from './tooltips/tooltips.component';

import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './cards/cards.component';
import { ChipsComponent } from './chips/chips.component';
import { PaginationComponent } from './pagination/pagination.component';





@NgModule({
  declarations: [
    AppComponent,
    AppNameComponent,
    SidebarComponent,
    ButtonsComponent,
    IconComponent,
    StatesComponent,
    GroupsComponent,
    DropdownsComponent,
    TypographyComponent,
    IconsComponent,
    ColorsComponent,
    InputsComponent,
    SelectsComponent,
    InputGroupsComponent,
    CheckboxesComponent,
    RadiosComponent,
    AccordionComponent,
    AlertsComponent,
    BreadcrumbsComponent,
    CardsComponent,
    ChipsComponent,
    PaginationComponent,
    TabsComponent,
    TablesComponent,
    StripedComponent,
    BorderedComponent,
    TooltipsComponent,
    SwitchesComponent,
    LightSwitchComponent,
    SlideSwitchComponent,
    FlipSwitchComponent,
    ToggleSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
