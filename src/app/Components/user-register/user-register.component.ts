import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  userRegisterForm;
  constructor() {
    this.userRegisterForm = new FormGroup({
      fullName: new FormControl('',[Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl('')
      }),
      password: new FormControl(''),
      ConfirmPassword: new FormControl(''),
    });
  }

  fillForm(){
    //this.userRegisterForm.get('fullName')?.setValue('Test fill form');

    //set value must send complete object

    // this.userRegisterForm.setValue({
    //     fullName:'',
    //     email: '',
    //     phone: '',
    //     address: {
    //       city: '',
    //       state: '',
    //       postalCode: ''
    //     },
    //     password: '',
    //     ConfirmPassword: ''
    // });

    //patch value dont force to send complete object
    this.userRegisterForm.patchValue({
      fullName: 'ahmed mohsen taha',
      phone: '01060626739',
      address: {
        city: 'kafr elsheikh',
        state: 'kafr elsheikh',
        postalCode: '14566'
      }
    })
  }

  // get keyword to treat function as property
  get fullName(){
    return this.userRegisterForm.get('fullName');
  }
}
