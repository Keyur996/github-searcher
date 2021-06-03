import { GithubService } from './../../services/github.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: any;
  // error: string = '';
  userName: string = '';
  constructor(
    private _github: GithubService,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.userName = param.userName;
      this.handleFind();
    });
  }

  handleFind() {
    if (this.userName) {
      this._github.getUserDetails(this.userName).subscribe(
        (user: any) => {
          this.user = user;
          console.log(user);
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
          // this.error = 'User Not Found';
          this.ref.detectChanges();
        }
      );
    }
  }
}
