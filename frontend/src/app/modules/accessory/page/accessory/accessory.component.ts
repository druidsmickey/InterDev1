import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.css']
})

export class AccessoryComponent implements OnInit {
  private displayedColumns = [];
  private filterItems = [];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getAccessory();

    this.displayedColumns = ['Brand', 'Model', 'Description', 'Price'];
  }

  getAccessory() {
    this.commonService.getAccessory().subscribe(
      (data: any) => {
        this.filterItems = data;
      }
    );
  }

}
