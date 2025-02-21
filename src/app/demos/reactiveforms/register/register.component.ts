import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class RegisterComponent implements OnInit {
  
  formRegister!: FormGroup;
  user!: User;
  formResult: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.formRegister = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cpf: [''],
    password: [''],
    passwordConfirmation: [''],
    });
  }

  addUser(){
    if(this.formRegister.dirty && this.formRegister.valid)
    {
      this.user = Object.assign({}, this.user, this.formRegister.value);
      this.formResult = JSON.stringify(this.formRegister.value);
    }
  }
}
