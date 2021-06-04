import { ToastrService } from 'ngx-toastr';
import { GithubService } from './../../services/github.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  text: string = '';
  users: any[] = [];
  constructor(private _github: GithubService, private _toastr: ToastrService) {}

  ngOnInit(): void {}

  handleSearch() {
    this._github.SearchUsers(this.text).subscribe(
      (data: any) => {
        // console.log(data);
        this.users = data?.items;
        this.text = '';
      },
      (err) => {
        console.log(err);
        this._toastr.error('Something went wrong!!');
      }
    );
  }

  clear() {
    this.users = [];
  }
}
