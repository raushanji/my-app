import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder,FormArray } from '@angular/forms';
import {customValidators } from './testValidator';



@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  // testControl = new FormControl('Hello')

  // loginForm = new FormGroup({
  //   email : new FormControl('', [ Validators.required, Validators.email ]),
  //   password : new FormControl('', Validators.required)
  // })
  loginForm : FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email : ['', [Validators.required, customValidators.includesSpace]],
      password : ['', Validators.required],
      address : this.fb.array([this.createGroup()])
    })

  }

  createGroup(){
    return this.fb.group({
      addressLine1 : '',
      addressLine2 : '',
      city : '',
      state : ''
    })
  }

  addGroup(){
    let arr = this.loginForm.get('address') as FormArray;
    
    arr.push(this.createGroup());
  }

  removeGroup(i){
    let arr = this.loginForm.get('address') as FormArray;
    
    arr.removeAt(i);
  }

  displayGroup(){
    console.log(this.loginForm);
  }

  get emailControl() {
    return this.loginForm.get('email')
  }

  get passControl() {
    return this.loginForm.get('password')
  }

  submitForm(){
    // console.log(this.loginForm.value)
    console.log(this.loginForm.getRawValue())
  }

  prefillValues(){
    this.loginForm.patchValue({
      email : 'sample@email.com',
      // password : 'abc',
      address : {
        addressLine1 : 'line 1',
        addressLine2 : 'line 2',
        city : '1',
        state : 'state'
      }
    })
  }
  
  submitValues(){
    console.log('Simple Value', this.loginForm.value);
    console.log('Raw Value', this.loginForm.getRawValue());

    this.loginForm.reset()
    
  }


}
