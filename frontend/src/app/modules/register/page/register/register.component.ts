import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService) {}

  username: string;
  email: string;
	password: string;

  ngOnInit() {
  }

  register() : void {
    this.commonService.register({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(
      (res: any) => {
        console.log('data', res);
        if (res.message == 'registered successfully') {
          this.router.navigate(["login"]);
        }
      },
			(error: any) => console.log(error)
    );

  }
}
