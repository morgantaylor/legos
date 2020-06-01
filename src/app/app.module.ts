// Everything in order in which it appears

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './app-base/app-base.component';

// Font Awesome icon imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// only for documentation not the component
import { NavigationComponent } from './navigation/navigation.component';

// introduction Section
import { IntroductionComponent } from './introduction/introduction.component';

// getting started Section
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IncludingComponent } from './getting-started/including/including.component';
import { NamingComponent } from './getting-started/naming/naming.component';
import { DocumentationComponent } from './getting-started/documentation/documentation.component';
import { AccessabilityComponent } from './getting-started/accessability/accessability.component';

// base section
import { BaseComponent } from './base/base.component';

import { ColorsComponent } from './base/colors/colors.component';
import { SkinsComponent } from './base/skins/skins.component';
import { IconsComponent } from './base/icons/icons.component';
import { TypographyComponent } from './base/typography/typography.component';

import { ContainersComponent } from './base/containers/containers.component';
import { ListComponent } from './base/list/list.component';

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

import { FormsComponent } from './components/forms/forms.component';

// module/layout section
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavigationComponent,
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
    NamingComponent,
    AppBaseComponent,
    GettingStartedComponent,
    IncludingComponent,
    DocumentationComponent,
    AccessabilityComponent,
    MobileNavComponent,
    FormsComponent,
    ListComponent,
    SkinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    library.add(fas, fab);
    library.add(faShower, 
    faBookmark, 
    faCheck, 
    faTimes, 
    faClone, 
    faEye, 
    faFlag, 
    faCog,
    faInfoCircle,
    faPencilAlt,
    faPlusCircle,
    faSyncAlt,
    faSearch,
    faSortDown,
    faSortUp,
    faExclamationTriangle,
    faCaretDown,
    faUpload,
    faCode,
    faBars,
    faGithub);
  }
}
