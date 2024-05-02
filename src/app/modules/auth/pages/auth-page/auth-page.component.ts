import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

 formLogin: FormGroup = new FormGroup({});

 constructor(){}
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
      Validators.maxLength(12),

    ])
  })
 }

}
