// Everything in order in which it appears

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNameComponent } from './app-name/app-name.component';
import { AppRoutingModule } from './app-routing.module';

// only for documentation
import { SidebarComponent } from './sidebar/sidebar.component';

// base section
import { BaseComponent } from './base/base.component';

import { ColorsComponent } from './base/colors/colors.component';
import { TypographyComponent } from './base/typography/typography.component';
import { IconsComponent } from './base/icons/icons.component';
import { ContainersComponent } from './base/containers/containers.component';

import { ButtonsComponent } from './base/buttons/buttons.component';
import { BtnIconsComponent } from './base/buttons/icons/icons.component';
import { GroupsComponent } from './base/buttons/groups/groups.component';
import { DropdownsComponent } from './base/buttons/dropdowns/dropdowns.component';

import { InputsComponent } from './base/inputs/inputs.component';
import { SelectsComponent } from './base/inputs/selects/selects.component';
import { InputGroupsComponent } from './base/inputs/input-groups/input-groups.component';
import { CheckboxesComponent } from './base/inputs/checkboxes/checkboxes.component';
import { RadiosComponent } from './base/inputs/radios/radios.component';

import { TablesComponent } from './base/tables/tables.component';
import { BorderedComponent } from './base/tables/bordered/bordered.component';
import { StripedComponent } from './base/tables/striped/striped.component';

// component section
import { ComponentsComponent } from './components/components.component';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChipsComponent } from './components/chips/chips.component';

import { SwitchesComponent } from './components/switches/switches.component';
import { LightSwitchComponent } from './components/switches/light-switch/light-switch.component';

import { TabsComponent } from './components/tabs/tabs.component';

import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToastComponent } from './components/toast/toast.component';


// layout section


@NgModule({
  declarations: [
    AppComponent,
    AppNameComponent,
    SidebarComponent,
    ButtonsComponent,
    BtnIconsComponent,
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
    ToastComponent,
    BaseComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
