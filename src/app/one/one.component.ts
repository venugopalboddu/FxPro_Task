import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  data:any;
  fdata:any;
  emplye: any;
  constructor(private service: GetapiService, private myRoute: Router) { }

  ngOnInit() {
    this.GetData();
  }
  GetData(){
    this.service.GetApiData().subscribe(res=>{
      console.log("Test", res);
      this.data = res;
    });
  }

  //Navigate Route Based on Id of Given Server Data using below Method
  ID(id)
  {
         this.service.GetId(id).subscribe(res=>{
         //console.log("Get",res);
         this.myRoute.navigate(['/com2']);
    });
  }

  //Modal PopUp Method Here
  openModal(id) {
    console.log(id);
    this.emplye = id;
  }
}
