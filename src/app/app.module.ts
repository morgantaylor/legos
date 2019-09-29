// Everything in order in which it appears

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNameComponent } from './app-name/app-name.component';
import { AppRoutingModule } from './app-routing.module';

// only for documentation
import { SidebarComponent } from './sidebar/sidebar.component';

// base section
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { ContainersComponent } from './containers/containers.component';

import { ButtonsComponent } from './buttons/buttons.component';
import { BtnIconsComponent } from './buttons/icons/icons.component';
import { StatesComponent } from './buttons/states/states.component';
import { GroupsComponent } from './buttons/groups/groups.component';
import { DropdownsComponent } from './buttons/dropdowns/dropdowns.component';

import { InputsComponent } from './inputs/inputs.component';
import { SelectsComponent } from './inputs/selects/selects.component';
import { InputGroupsComponent } from './inputs/input-groups/input-groups.component';
import { CheckboxesComponent } from './inputs/checkboxes/checkboxes.component';
import { RadiosComponent } from './inputs/radios/radios.component';

// component section
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BorderedComponent } from './tables/bordered/bordered.component';
import { CardsComponent } from './cards/cards.component';
import { ChipsComponent } from './chips/chips.component';

import { SwitchesComponent } from './switches/switches.component';
import { LightSwitchComponent } from './switches/light-switch/light-switch.component';

import { TabsComponent } from './tabs/tabs.component';

import { TablesComponent } from './tables/tables.component';
import { StripedComponent } from './tables/striped/striped.component';

import { TooltipsComponent } from './tooltips/tooltips.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ToastComponent } from './toast/toast.component';

// layout section


@NgModule({
  declarations: [
    AppComponent,
    AppNameComponent,
    SidebarComponent,
    ButtonsComponent,
    BtnIconsComponent,
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
    ContainersComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
