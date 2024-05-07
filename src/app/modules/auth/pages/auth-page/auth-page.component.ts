import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

 errorSession:boolean=false
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
  .subscribe(responseOk =>{
    console.log('Inicio de sesion exisota',responseOk)
  },
error=>{
  this.errorSession=true,
  console.log(`${error}, ocurrio un error con tu email o password`)
})
 }
}
