import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommonService } from '../../../../common.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css']
})

export class CctvComponent implements OnInit {
	private cctvtabs = [];
  private allitems : any = [];
  private displayedColumns = [];
  private selectedItem: any = {};
  private filterItems : any = [];
  private testbrands  : any = [];
  private brands  : any = [];
  private models  : any = [];
  private qualities  : any = [];
  private types  : any = [];
  private cctvs = [];
  private images = [];
  private temp = [];
  private imageSrc = "";
  orderBrand = "value"; //sorting
  ascending = true; //sorting

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getCCTVs();
    this.getBrands();
    this.getImages();

  	this.cctvtabs = [
      { menu: 'All products', id: 'allproducts' },
      { menu: 'Stand Alone', id: 'StandAlone' },
      { menu: '720P', id: '720P' },
      { menu: '1080P', id: '1080P' },
      { menu: 'Kits', id: 'Kits' },
      { menu: 'Design your System', id: 'design'}
    ];
    this.displayedColumns = ['Brand', 'Model', 'Quality', 'Transmission', 'Description', 'Price'];
    this.filterItems = this.allitems.slice();
    this.selectedItem = 'allproducts';

  }

  onClick() {
    this.filterItems = [];
    if (this.selectedItem == 'allproducts') {
      this.filterItems = this.allitems.slice();
    } else {
      if (this.selectedItem == 'StandAlone') {
        this.filterItems = _.filter(this.allitems, { type: 'Stand Alone' });
      } 
      else if (this.selectedItem == '720P') {
        this.filterItems = _.filter(this.allitems, { quality: '720P' });
      }
      else if (this.selectedItem == '1080P') {
        this.filterItems = _.filter(this.allitems, { quality: '1080P' });
      }
      // else if (this.selectedItem == '720P' || this.selectedItem == '1080P') {
      //   this.filterItems = _.filter(this.allitems, item => item.quality == this.selectedItem );
      // }
    }
  }

  applyFilter(filterValue:string) {
    // console.log(filterValue);
    this.filterItems = [];
    if (filterValue !== 'allbrands') {
      if (this.selectedItem == 'allproducts') {
        this.filterItems = _.filter(this.allitems, item => item.brand  == filterValue );
      } else {
        if (this.selectedItem == 'StandAlone') {
          this.filterItems = _.filter(this.allitems, item => item.type == 'Stand Alone' && item.brand  == filterValue );
        } else if (this.selectedItem == '720P' || this.selectedItem  == '1080P') {
          this.filterItems = _.filter(this.allitems, item => item.quality  == this.selectedItem  &&  item.brand  == filterValue );
        }
      }
    } 
    else {
      if (this.selectedItem == 'allproducts') {
        this.filterItems = this.allitems.slice();
      } else {
        if (this.selectedItem == 'StandAlone') {
          this.filterItems = _.filter(this.allitems, { type: 'Stand Alone' });
        } 
        // else if (this.selectedItem == '720P') {
        //   this.filterItems = _.filter(this.allitems, { quality: '720P' });
        // }
        // else if (this.selectedItem == '1080P') {
        //   this.filterItems = _.filter(this.allitems, { quality: '1080P' });
        // }
        else if (this.selectedItem  == '720P' || this.selectedItem  == '1080P') {
          this.filterItems = _.filter(this.allitems, item => item.quality  == this.selectedItem );
        }
      }
    }
  }

  getBrands() {
    this.commonService.getBrands().subscribe(
      data => {
        this.brands = data;
      }
    );
  }

  getCCTVs() {
    this.commonService.getCCTVs().subscribe(
      (data: any) => {
        this.allitems = data;
        this.filterItems = data;
        this.models = _.uniqBy(data, 'model').map((item: any) => item.model);
        this.qualities = _.uniqBy(data, 'quality').map((item: any) => item.quality);
        this.types = _.uniqBy(data, 'type').map((item: any) => item.type);
        // console.log(this.brands);
        this.commonService.getAccessory().subscribe(
          (data: any) => {
            this.filterItems = this.filterItems.concat(data);
            this.allitems = this.allitems.concat(data);
            console.log(this.brands);
            this.commonService.getRecorders().subscribe(
              (data: any) => {
                this.filterItems = this.filterItems.concat(data);
                this.allitems = this.allitems.concat(data);
                // console.log(this.brands);
              }
            )

          }
        );
      }
    );
  }

  getImages() {
    this.commonService.getImages().subscribe(
      (data: any) => {
        this.images = data.map((item: any) => item.data);
        this.temp = this.images[0];
      }
    );
  }
}
