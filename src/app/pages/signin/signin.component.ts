import { LoaderService } from './../../services/loader.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
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
        .signIn(email, password)
        .then((res: any) => {
          this._loader.hide();
          this.router.navigate(['/'], { relativeTo: this.route });
          this.toastr.success('LogIn success !!!');
        })
        .catch((err: any) => {
          this._loader.hide();
          console.log(err);
          this.toastr.error(err.message, 'Something went wrong');
        });
    }
  }
}
