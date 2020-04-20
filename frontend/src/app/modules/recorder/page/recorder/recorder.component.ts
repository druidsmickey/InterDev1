import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})

export class RecorderComponent implements OnInit {
	// private recordertabs = [];
  private allitems : any = [];
  private displayedColumns = [];
  private selectedItem = {};
  private items : any = [];
  private testbrands  : any = [];
  private brands  : any = [];
  private recorders = [];
  orderBrand = "value"; //sorting
  ascending = true; //sorting

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getBrands();
    this.getRecorders();

  	// this.recordertabs = [
    //   {menu:"All products", id:"allproducts"},
    //   {menu:"Stand Alone", id:"StandAlone"},
    //   {menu:"720P", id:"720P"},
    //   {menu:"1080P", id:"1080P"},
    //   {menu:"Kits", id:"Kits"},
    //   {menu:"Design your System", id:"design"}
    // ];

    console.log(this.recorders);
    this.displayedColumns = ['Brand','Model', 'Price'];
    this.items = this.allitems;
    this.selectedItem = "allproducts";

  }

  onClick() {
    this.items = [];
    if (this.selectedItem == "allproducts") {
      this.items =this.allitems;
    } else {
      for (let i = 0; i < this.allitems.length; i++) {
        if (this.allitems[i].model == this.selectedItem) {
          this.items.push(this.allitems[i]);
          console.log(this.allitems[i]);
        };
      };
    }
    console.log(this.items);
  }

  applyFilter(filterValue:string) {
    console.log(this.selectedItem);
    this.items = [];
    if (filterValue == "Allbrands") {
      if (this.selectedItem == "allproducts") {
        this.items =this.allitems;
      } else {
        for (let i = 0; i< this.allitems.length; i++) {
          if (this.allitems[i].model == this.selectedItem) {
            this.items.push(this.allitems[i]);
          };
        };
      }
    } else {
      console.log(filterValue);
      console.log(this.allitems);
      for (let i = 0; i < this.allitems.length; i++) {
        if (this.allitems[i].model == this.selectedItem && this.allitems[i].brand == filterValue) {
          this.items.push(this.allitems[i]);
        } else if (this.selectedItem == "allproducts" && this.allitems[i].brand == filterValue) {
          this.items.push(this.allitems[i]);
        };
      };
    }
  }

  getBrands() {
    this.commonService.getBrands().subscribe(
      data => this.brands = data
    );
  }

  getRecorders() {
    this.commonService.getRecorders().subscribe(
      data => {
        this.allitems = data;
        this.items = data;
        console.log('data', data);
      }
    );
  }
}
