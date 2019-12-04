import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { DefaultFormsComponent } from './form-layout/default-forms/default-forms.component';
import { NgxWizardModule } from './form-layout/ngx-wizard/ngx-wizard.module';

@NgModule({
  declarations: [FormValidationComponent, BaseInputsComponent, CheckboxRadioComponent, InputGroupsComponent, MegaOptionsComponent, DefaultFormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    NgxWizardModule
  ]
})
export class FormModule { }
