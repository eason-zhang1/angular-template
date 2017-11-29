import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  error = '';
  loading = false;

  count = 0;
  interval$: any;

  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      userName: [null, [Validators.required]],
      password: [null, Validators.required]
    });
  }

  get userName() {
    return this.form.controls.userName;
  }

  get password() {
    return this.form.controls.password;
  }

  submit() {
    this.error = '';
    this.userName.markAsDirty();
    this.password.markAsDirty();
    if (this.userName.invalid || this.password.invalid) {
      return;
    }
    alert("哈哈哈哈哈哈哈啊哈和");

    console.log("user name, this.password", this.userName.value, this.password.value);
    // mock http
    this.loading = true;
    /*this.userService.login(this.userName.value, this.password.value).subscribe(rep => {
      console.log("response", rep);
      this.loading = false;
      alert("哈哈哈哈哈哈哈啊哈和");
    });*/
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }

}
