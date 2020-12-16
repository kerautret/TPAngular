import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import{trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'
import { Router } from '@angular/router'
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
    animations : [ trigger('animobjectifs' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '.6s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateY(-25%)', offset: 0}), style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
    style({opacity: 1, transform: 'translateY(0)', offset: 1}), ]))]),{optional: true})
    ]) ])]
})


export class HomeComponent implements OnInit {
  nbItems: number = 4;
  btnText: string = "Ajoutez un element!!";
  objectifText: string = "...";
  objectifs = ["Toto", "titi"]; 
  tabImages = ["https://www.notretemps.com/cache/com_zoo_images/ac/chatons-psycho_61d46a6e8d925ecf4a5a25c62360bea8.jpg",
"https://www.leparisien.fr/resizer/74wMQIeXKLDUKuKvSzJQME_0ULg=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/KNVYKZBDTTOXNO37FEVDTD5DJU.jpg" ]

  constructor(private monRouter: Router) {   
    


  }

  ngOnInit() {
    this.nbItems = this.objectifs.length  
  }

  ajooutItem(){
    this.objectifs.push(this.objectifText)
    this.nbItems = this.objectifs.length  
    setTimeout(()=> {this.monRouter.navigate(['about'])}, 4000 );   

  }  
  getColor(){
      if (this.objectifText == "..."|| this.objectifText == "")
      {
        return 'darkred'
      }
      else 
      {
        return 'blue'
      }
  }
  getClass(){
    if (this.objectifText == "..."|| this.objectifText == "")
    {
      return true
    }
    else 
    {
      return false
    }

  }

}
