import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
	public menus = [];
	private selectedItem = {};
  constructor() {}

  ngOnInit() {
  	this.menus = [
  		{
        item: 'User Accounts',
        link: '/UserAccountsComponent'
      },
  		{
        item: 'MenuTabs',
        link: '/MenuTabsComponent'
      },
  		{
        item: 'Brands',
        link: '/BrandsComponent'
      },
  		{
        item: 'Items',
        link: '/ItemsComponent'
      },
      {
        item: 'Pricing',
        link: '/PricingComponent'
      }
    ];
  }
}
