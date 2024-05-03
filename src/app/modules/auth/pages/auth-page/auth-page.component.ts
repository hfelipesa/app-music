import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

 formLogin: FormGroup = new FormGroup({});

 constructor(private authService:AuthService){}
 ngOnInit(){
  this.formLogin = new FormGroup({
    //Clave valor
    email: new FormControl('',[
      //Validaciones del Input
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      

    ])
  })
 }

 sendLogin():void{
  const {email,password}=this.formLogin.value
  this.authService.sendCredentials(email,password)

  if(email === 'felipe@test.com' && password === 'test123'){
    console.log('El usuario existe');
  }else{
    console.log('El usuario no existe');
  }
 }

}
