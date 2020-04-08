import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css']
})

export class CctvComponent implements OnInit {
	private cctvtabs = [];
  private allitems = [];
  private displayedColumns = [];
  private selectedItem = {};
  private items = [];
  private testbrands  : any = [];
  private brands  : any = [];
  private cctvs = [];
  orderBrand = "value"; //sorting
  ascending = true; //sorting

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getBrands();
    this.getCCTVs();

  	this.cctvtabs = [
    		{menu:"All products", id:"allproducts"},
    		{menu:"Stand Alone", id:"StandAlone"},
    		{menu:"720P", id:"720P"},
    		{menu:"1080P", id:"1080P"},
        {menu:"Kits", id:"Kits"},
        {menu:"Design your System", id:"design"}
    ];

    console.log(this.cctvs);
    this.displayedColumns = ['Brand','Model', 'Description', 'Price'];
    this.items = this.allitems;
    this.selectedItem = "allproducts";

  }


  onClick(){
    this.items =[];
    if (this.selectedItem == "allproducts"){
      this.items =this.allitems
    } else {
      for (var i=0; i< this.allitems.length;i++){
        if (this.allitems[i].model == this.selectedItem){
          this.items.push(this.allitems[i]);
          console.log(this.allitems[i]);
        };
      };
    }
    console.log(this.items);
  }



  applyFilter(filterValue:string) {
    console.log(this.selectedItem);
    this.items =[];
    if (filterValue == "Allbrands"){
      if (this.selectedItem == "allproducts"){
        this.items =this.allitems
      } else {
        for (var i=0; i< this.allitems.length;i++){
          if (this.allitems[i].model == this.selectedItem){
            this.items.push(this.allitems[i]);
          };
        };
      }
    }else{
      console.log(filterValue);
      console.log(this.allitems);
      for (var i=0; i< this.allitems.length;i++){
        if (this.allitems[i].model == this.selectedItem && this.allitems[i].brand == filterValue){
          this.items.push(this.allitems[i]);
        } else if (this.selectedItem == "allproducts" && this.allitems[i].brand == filterValue){
          this.items.push(this.allitems[i]);
        };
      };
    }
  }

  getBrands(){
    this.commonService.getBrands().subscribe(
      data => this.brands = data
      )
  }

  getCCTVs(){
    this.commonService.getCCTVs().subscribe(
      data => {this.allitems = data,
                this.items = data
                console.log('data', data);
      })
  }
}
