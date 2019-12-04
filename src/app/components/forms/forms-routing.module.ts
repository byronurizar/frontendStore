import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { DefaultFormsComponent } from './form-layout/default-forms/default-forms.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'validation',
        component: FormValidationComponent
      },
      {
        path: 'inputs',
        component: BaseInputsComponent
      },  
      {
        path: 'checkbox-radio',
        component: CheckboxRadioComponent
      }, 
      {
        path: 'input-groups',
        component: InputGroupsComponent
      },
      {
        path: 'mega-options',
        component: MegaOptionsComponent
      },
      {
        path: 'defualt',
        component: DefaultFormsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
