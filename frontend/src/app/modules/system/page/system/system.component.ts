import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../../../../common.service';

export interface SystemItems {
  image: string;
  model: string;
  price: number;
  count: number;
  total: number;
}

const ELEMENT_DATA: SystemItems[] = [
  {image: 'aaa', model: 'aaa', price: 333, count: 2, total: 666},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit {
  items = [];
  detailImage = "https://images-na.ssl-images-amazon.com/images/I/51YNd4Y7bsL._SL1500_.jpg";
  displayedColumns = ['image', 'model', 'price', 'count', 'total'];
  dataSource = [];
  // cctvItem = [];

  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    
    this.dataSource = ELEMENT_DATA;
  }

  loadAccessory() {
    // console.log("loadAccessory");
    this.commonService.getAccessory().subscribe(
      (data: any) => {
        this.items = data;
      }
    );
  }
  loadRecorder() {
    // console.log("loadRecorder");
    this.commonService.getRecorders().subscribe(
      (data: any) => {
        this.items = data;
      }
    );
  }
  loadCCTV() {
    this.commonService.getCCTVs().subscribe(
      (data: any) => {
        this.items = data;
      }
    );
    // console.log("loadCCTV");
  }
  setImage(detailImage) {
    this.detailImage = detailImage.image;
    console.log(this.detailImage);
  }
}