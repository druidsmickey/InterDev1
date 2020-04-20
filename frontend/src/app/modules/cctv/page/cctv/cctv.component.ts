import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommonService } from '../../../../common.service';

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
  private items : any = [];
  private testbrands  : any = [];
  private brands  : any = [];
  private cctvs = [];
  orderBrand = "value"; //sorting
  ascending = true; //sorting

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getBrands();
    this.getCCTVs();

  	this.cctvtabs = [
      { menu: 'All products', id: 'allproducts' },
      { menu: 'Stand Alone', id: 'StandAlone' },
      { menu: '720P', id: '720P' },
      { menu: '1080P', id: '1080P' },
      { menu: 'Kits', id: 'Kits' },
      { menu: 'Design your System', id: 'design'}
    ];

    console.log(this.cctvs);
    this.displayedColumns = ['Brand', 'Model', 'Quality', 'Transmission', 'Description', 'Price'];
    this.items = this.allitems.slice();
    this.selectedItem = 'allproducts';

  }

  onClick() {
    this.items = [];
    if (this.selectedItem == 'allproducts') {
      this.items = this.allitems.slice();
    } else {
      if (this.selectedItem == 'StandAlone') {
        for (let i = 0; i < this.allitems.length; i++) {
          if (this.allitems[i].type == 'Stand Alone') {
            this.items.push(this.allitems[i]);
          };
        }
      } else if (this.selectedItem.toLowerCase() == '720p' || this.selectedItem.toLowerCase() == '1080p') {
        for (let i = 0; i < this.allitems.length; i++) {
          if (this.allitems[i].quality.toLowerCase() == this.selectedItem.toLowerCase()) {
            this.items.push(this.allitems[i]);
          };
        }
      }
    }
  }

  applyFilter(filterValue:string) {
    this.items = [];
    if (filterValue !== 'allbrands') {
      if (this.selectedItem == 'allproducts') {
        for (let i = 0; i < this.allitems.length; i++) {
          if (this.allitems[i].brand.toLowerCase() == filterValue.toLowerCase()) {
            this.items.push(this.allitems[i]);
          };
        }
      } else {
        if (this.selectedItem == 'StandAlone') {
          for (let i = 0; i < this.allitems.length; i++) {
            if (this.allitems[i].type == 'Stand Alone' && this.allitems[i].brand.toLowerCase() == filterValue.toLowerCase()) {
              this.items.push(this.allitems[i]);
            };
          }
        } else if (this.selectedItem.toLowerCase() == '720p' || this.selectedItem.toLowerCase() == '1080p') {
          for (let i = 0; i < this.allitems.length; i++) {
            if (this.allitems[i].quality.toLowerCase() == this.selectedItem.toLowerCase() && this.allitems[i].brand.toLowerCase() == filterValue.toLowerCase()) {
              this.items.push(this.allitems[i]);
            };
          }
        }
      }
    } else {
      if (this.selectedItem == 'allproducts') {
        this.items = this.allitems.slice();
      } else {
        if (this.selectedItem == 'StandAlone') {
          for (let i = 0; i < this.allitems.length; i++) {
            if (this.allitems[i].type == 'Stand Alone') {
              this.items.push(this.allitems[i]);
            };
          }
        } else if (this.selectedItem.toLowerCase() == '720p' || this.selectedItem.toLowerCase() == '1080p') {
          for (let i = 0; i < this.allitems.length; i++) {
            if (this.allitems[i].quality.toLowerCase() == this.selectedItem.toLowerCase()) {
              this.items.push(this.allitems[i]);
            };
          }
        }
      }
    }
  }

  getBrands() {
    this.commonService.getBrands().subscribe(
      data => {
        console.log('brands', data);
        this.brands = data;
      }
    );
  }

  getCCTVs() {
    this.commonService.getCCTVs().subscribe(
      data => {
        this.allitems = data;
        this.items = data;
        console.log('data', data);
      }
    );
  }
}
