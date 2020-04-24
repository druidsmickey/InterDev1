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
  orderBrand = "value"; //sorting
  ascending = true; //sorting

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getCCTVs();
    this.getBrands();

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
      } else if (this.selectedItem.toLowerCase() == '720p' || this.selectedItem.toLowerCase() == '1080p') {
        this.filterItems = _.filter(this.allitems, item => item.quality.toLowerCase() == this.selectedItem.toLowerCase());
      }
    }
  }

  applyFilter(filterValue:string) {
    this.filterItems = [];
    if (filterValue !== 'allbrands') {
      if (this.selectedItem == 'allproducts') {
        this.filterItems = _.filter(this.allitems, item => item.brand.toLowerCase() == filterValue.toLowerCase());
      } else {
        if (this.selectedItem == 'StandAlone') {
          this.filterItems = _.filter(this.allitems, item => item.type == 'Stand Alone' && item.brand.toLowerCase() == filterValue.toLowerCase());
        } else if (this.selectedItem.toLowerCase() == '720p' || this.selectedItem.toLowerCase() == '1080p') {
          this.filterItems = _.filter(this.allitems, item => item.quality.toLowerCase() == this.selectedItem.toLowerCase() && item.brand.toLowerCase() == filterValue.toLowerCase());
        }
      }
    } else {
      if (this.selectedItem == 'allproducts') {
        this.filterItems = this.allitems.slice();
      } else {
        if (this.selectedItem == 'StandAlone') {
          this.filterItems = _.filter(this.allitems, { type: 'Stand Alone' });
        } else if (this.selectedItem.toLowerCase() == '720p' || this.selectedItem.toLowerCase() == '1080p') {
          this.filterItems = _.filter(this.allitems, item => item.quality.toLowerCase() == this.selectedItem.toLowerCase());
        }
      }
    }
  }

  getBrands() {
    this.commonService.getBrands().subscribe(
      data => {
        // console.log('brands', data);
        this.brands = data;
      }
    );
  }

  getCCTVs() {
    this.commonService.getCCTVs().subscribe(
      (data: any) => {
        this.allitems = data;
        this.filterItems = data;
        this.brands = _.uniqBy(data, 'brand').map((item: any) => item.brand);
        this.models = _.uniqBy(data, 'model').map((item: any) => item.model);
        this.qualities = _.uniqBy(data, 'quality').map((item: any) => item.quality);
        this.types = _.uniqBy(data, 'type').map((item: any) => item.type);
        // console.log(this.brands);
        this.commonService.getAccessory().subscribe(
          (data: any) => {
            this.filterItems = this.filterItems.concat(data);
            this.brands = this.brands.concat(_.uniqBy(data, 'brand').map((item: any) => item.brand));

            this.commonService.getRecorders().subscribe(
              (data: any) => {
                this.filterItems = this.filterItems.concat(data);
                this.brands = this.brands.concat(_.uniqBy(data, 'brand').map((item: any) => item.brand));
              }
            )

          }
        );
      }
    );
  }
}
