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
  orderBrand = "value";
  ascending = true;

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

    this.allitems = [
      {brand: "Dahua", position: 1, name: 'all', weight: 1.0079, symbol: 'H'},
      {brand: "Dahua", position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {brand: "Dahua", position: 3, name: 'lithium', weight: 6.941, symbol: 'Li'},
      {brand: "Hikvision", position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {brand: "Hikvision", position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {brand: "Hikvision", position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {brand: "Dahua", position: 7, name: 'StandAlone', weight: 14.0067, symbol: 'N'},
      {brand: "Dahua", position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {brand: "Hikvision", position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {brand: "Hikvision", position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    this.displayedColumns = ['Brand','Model', 'Description', 'Picture', 'Price'];
    this.items = this.allitems;
    this.selectedItem = "allproducts";

  }


  onClick(){

    this.items =[];
    if (this.selectedItem == "allproducts"){
      this.items =this.allitems
    } else {
      for (var i=0; i< this.allitems.length;i++){
        if (this.allitems[i].name == this.selectedItem){
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
          if (this.allitems[i].name == this.selectedItem){
            this.items.push(this.allitems[i]);
          };
        };
      }
    }else{
      console.log(filterValue);
      console.log(this.allitems);
      for (var i=0; i< this.allitems.length;i++){
        if (this.allitems[i].name == this.selectedItem && this.allitems[i].brand == filterValue){
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
      data => this.cctvs = data)
  }
}
