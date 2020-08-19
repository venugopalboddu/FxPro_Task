import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  data:any;
  constructor(private service: GetapiService) { }

  ngOnInit() {
    this.service.sdata.subscribe(res=>{
      console.log("com2", res);
      this.data = res;
    }); 
  }

}
