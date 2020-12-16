import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  maVariable: String
  maVariableDeux: String
  constructor(private  uneSuperRoute: ActivatedRoute ) { 
    this.maVariable = uneSuperRoute.snapshot.params['unParam']
    this.maVariableDeux = uneSuperRoute.snapshot.params['deuxParam']

  }


  ngOnInit() {
  }

}
