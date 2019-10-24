import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticationForm: FormGroup;
  router: any;

  constructor(
     private formBuilder: FormBuilder, private loginService: LoginService, private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.authenticationForm = this.formBuilder.group({
      empId: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
  }
  submit() {
    // tslint:disable-next-line: radix
    const employeeId = parseInt(this.authenticationForm.get('empId').value);
    console.log(employeeId);
    this.authenticationForm.patchValue({empId : employeeId});
    const values = { ...this.authenticationForm.value };
    console.log(values);
    this.loginService.check(values).subscribe(res => {
        console.log(res);
        if (res > 0) {
          window.location.href = 'http://localhost:4200/projectlist/' + res;
          //this.router.navigate(['projectlist', res]);
        } else {
          this.toastr.error('Incorrect username or password');
          this.authenticationForm.reset();
        }

    });
  }

}
