import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, CommonModule],
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isLogin: boolean = true
  loginForm: FormGroup
  registerForm: FormGroup
  registerPassword: boolean = true
  registerConfirmPassword: boolean = true
  loginPassword: boolean = true
  loginError:boolean = false
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      confirmPassword: ['', Validators.required]
    })
  }


  register() {
    const user: User = {
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    }
    this.authService.register(user).subscribe()
  }

  login() {
    const user: User = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }
    this.authService.login(user).subscribe()
  }



  togglePage() {
    this.isLogin = !this.isLogin
  }


  showPassword() {







  }
}
