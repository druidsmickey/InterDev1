import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	private menus = [];
	private selectedItem = {};
  constructor() { }

  ngOnInit() {
  	this.menus = [
		{item:"User Accounts", id:"User Accounts"},
		{item:"MenuTabs", id:"MenuTabs"},
		{item:"Brands", id:"Brands"},
		{item:"Items", id:"Items"},
        {item:"Pricing", id:"Pricing"}
    ];
  }

}
