import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  public border_validation = false;
  public regForm: FormGroup;
  public title: string = "registration page"
  public form: any;

  constructor(private route: Router, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.regForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }
  save(form: any) {
    if (!form.valid) {
      return false;
    }
    return true;
  }
  ngOnInit() { }

}
