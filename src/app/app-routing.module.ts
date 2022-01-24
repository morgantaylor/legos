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
import { AccessibilityComponent } from './getting-started/accessibility/accessibility.component';

// base section
import { CoreComponent } from './core/core.component';

import { ColorsComponent } from './core/colors/colors.component';
import { SkinsComponent } from './core/skins/skins.component';
import { IconsComponent } from './core/icons/icons.component';
import { TypographyComponent } from './core/typography/typography.component';

import { ContainersComponent } from './core/containers/containers.component';
import { ListComponent } from './core/list/list.component';

import { ButtonsComponent } from './core/buttons/buttons.component';
import { BtnIconsComponent } from './core/buttons/icons/icons.component';
import { GroupsComponent } from './core/buttons/groups/groups.component';
import { DropdownsComponent } from './core/buttons/dropdowns/dropdowns.component';

import { InputsComponent } from './core/inputs/inputs.component';
import { SelectsComponent } from './core/inputs/selects/selects.component';
import { InputGroupsComponent } from './core/inputs/input-groups/input-groups.component';
import { CheckboxesComponent } from './core/inputs/checkboxes/checkboxes.component';
import { RadiosComponent } from './core/inputs/radios/radios.component';

import { TablesComponent } from './core/tables/tables.component';

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
      { path: 'accessibility', component: AccessibilityComponent }
    ]
  },
  { path: 'core', component: CoreComponent, 
    children: [
      { path: 'colors', component: ColorsComponent },  
      { path: 'icons', component: IconsComponent },
      { path: 'skins', component: SkinsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'containers', component: ContainersComponent },
      { path: 'lists', component: ListComponent },
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
