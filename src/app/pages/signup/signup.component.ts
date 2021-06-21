import { LoaderService } from './../../services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private _loader: LoaderService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    // console.log(f.value);
    const { email, password } = f.value;
    if (f.valid) {
      this._loader.show();
      this._authService
        .signUp(email, password)
        .then((res: any) => {
          this._loader.hide();
          this.router.navigate(['/'], { relativeTo: this.route });
          this.toastr.success('Register success !!!');
        })
        .catch((err: any) => {
          console.log(err);
          this._loader.hide();
          this.toastr.error(err.message, 'Something went wrong');
        });
    }
  }
}
