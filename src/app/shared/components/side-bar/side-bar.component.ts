import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  mainMenu: {
    defaulOptions: Array<any>,
    accessLink: Array<any>,  
  } =
    {
      defaulOptions: [],
      accessLink: [],
      
    }

  costumOptions: Array<any> = []

  constructor(){}

  ngOnInit() {
    this.mainMenu.defaulOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
       /*  router:'/' */
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        /* router:'/' */
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        /* router:'/' */
      },

    ]
    this.mainMenu.accessLink =[
      {
        name:'Crear lista',
        icon:'uil-plus-square'
      },
      {
        name:'Canciones que te gustan',
        icon:'uil-heart-medical'
      }
    ]

    this.costumOptions=[
      {
        name:'Mi lista #1',
        /* router:'/' */
      },
      {
        name:'Mi lista #2',
        /* router:'/' */
      },
      {
        name:'Mi lista #3',
       /*  router:'/' */
  
      },
    ]    
   }

}


//Explicacion
/*  linksMenu:Array<any>=[
    {
      name:'Home',
      icon:'uil-estate',
    },
    {
      name:'Buscar',
      icon:'uil-estate',
    },
  ] */

