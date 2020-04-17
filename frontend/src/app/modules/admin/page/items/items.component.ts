import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonService } from '../../../../common.service';
import  *  as  cctvs  from  './cctv.json';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  private testItems = [];
  private items = [];
  private myForm : FormGroup;
  private brand = new FormControl('',Validators.required);
  private model = new FormControl('',Validators.required);
  private quality = new FormControl('',Validators.required);
  private type = new FormControl('',Validators.required);
  private lens = new FormControl('',Validators.required);
  private lenstype = new FormControl('',Validators.required);
  private transmission = new FormControl('',Validators.required);
  private protection = new FormControl('',Validators.required);
  private ir = new FormControl('',Validators.required);
  private audioin = new FormControl('',Validators.required);
  private powersupply = new FormControl('',Validators.required);
  private link = new FormControl('',Validators.required);
  private price = new FormControl('',Validators.required);
  private featured = new FormControl('',Validators.required);

	constructor(private commonService: CommonService, private formBuilder: FormBuilder) {}

	ngOnInit() {
    this.myForm = this.formBuilder.group({
			brand: this.brand,
			model: this.model,
			quality: this.quality,
			type: this.type,
			lens: this.lens,
			lenstype: this.lenstype,
			transmission: this.transmission,
			protection: this.protection,
			ir: this.ir,
			audioin: this.audioin,
			powersupply: this.powersupply,
			link: this.link,
			price: this.price,
			featured: this.featured
    });
    this.testItems = cctvs.default;
    this.testItems.map(item => {
      if (item.hddcapacity) {
        this.commonService.addRecorders(item).subscribe(
          (res: any) => {
            console.log('test addrecorders', res);
          },
          (error: any) => {
            console.log('test addrecorders error', error);
          }
        );
      } else {
        this.commonService.addCCTVs(item).subscribe(
          (res: any) => {
            console.log('test addCCTVs', res);
          },
          (error: any) => {
            console.log('test addCCTVs error', error);
          }
        );
      }
    });
	}

	addCCTVs() {
		this.commonService.addCCTVs(this.myForm.value).subscribe(
			(res: any) => {
				let newItem = res.json();
				this.items.push(newItem);
				this.myForm.reset();
			},
			(error: any) => console.log(error)
		);
		console.log(this.myForm.value);
	}

	onReset(){
		console.log("all ok");
	}
}
