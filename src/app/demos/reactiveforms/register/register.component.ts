import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  formRegister!: FormGroup;
  
  ngOnInit(){
    this.formRegister = this.fb.group({
    name: [''],
    email: [''],
    cpf: [''],
    password: [''],
    passwordConfirmation: [''],
    });
  }

  addUser(){
    let x = this.formRegister.value;
  }
}
