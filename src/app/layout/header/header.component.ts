import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed: boolean = false;
  email: string = '';
  constructor(
    private _authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._authService
      .getUser()
      .subscribe((user: firebase.default.User | null) => {
        if (user) this.email = user.email!;
        else this.email = '';
      });
  }

  async handleSignOut(): Promise<void> {
    await this._authService
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/signin');
        this.toastr.success('LogIn Again to Continue');
        this.email = '';
      })
      .catch((err) => this.toastr.error('Something went Wrong'));
  }
}
