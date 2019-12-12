import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppBaseComponent } from './app-base/app-base.component';

// introduction Section
import { IntroductionComponent } from './introduction/introduction.component';

// getting started Section
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IncludingComponent } from './getting-started/including/including.component';
import { DocumentationComponent } from './getting-started/documentation/documentation.component';
import { NamingComponent } from './getting-started/naming/naming.component';
import { AccessabilityComponent } from './getting-started/accessability/accessability.component';

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

// component section
import { ComponentsComponent } from './components/components.component';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChipsComponent } from './components/chips/chips.component';

import { SwitchesComponent } from './components/switches/switches.component';

import { TabsComponent } from './components/tabs/tabs.component';

import { PaginationComponent } from './components/pagination/pagination.component';
import { ToastComponent } from './components/toast/toast.component';

import { FormsComponent } from './components/forms/forms.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },  
  { path: '', component: AppBaseComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'getting-started', component: GettingStartedComponent, 
    children: [
      { path: 'including', component: IncludingComponent },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'naming', component: NamingComponent },
      { path: 'accessability', component: AccessabilityComponent }
    ]
  },
  { path: 'base', component: BaseComponent, 
    children: [
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },  
      { path: 'icons', component: IconsComponent },
      { path: 'containers', component: ContainersComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'buttons/button-icons', component: BtnIconsComponent },
      { path: 'buttons/button-groups', component: GroupsComponent },
      { path: 'buttons/dropdowns', component: DropdownsComponent },
      { path: 'inputs', component: InputsComponent },
      { path: 'inputs/selects', component: SelectsComponent },
      { path: 'inputs/input-groups', component: InputGroupsComponent },
      { path: 'inputs/checkboxes', component: CheckboxesComponent },
      { path: 'inputs/radios', component: RadiosComponent },
      { path: 'tables', component: TablesComponent }
    ]
  },
  { path: 'components', component: ComponentsComponent,
    children: [
      { path: 'accordions', component: AccordionComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'breadcrumbs', component: BreadcrumbsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'chips', component: ChipsComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'toast', component: ToastComponent },
      { path: 'forms', component: FormsComponent }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
