import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService) {}

	username: string;
	password: string;

  ngOnInit() {
  }

  login() : void {
    this.commonService.login({
      username: this.username,
      password: this.password
    }).subscribe(
      (res: any) => {
        console.log('data', res);
        if (res.message == 'logged in successfully' && res.token !== '') {
          this.router.navigate(["AdminComponent"]);
        }
      },
			(error: any) => console.log(error)
    );
  }
}
