import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searched-users',
  templateUrl: './searched-users.component.html',
  styleUrls: ['./searched-users.component.css'],
})
export class SearchedUsersComponent implements OnInit {
  @Input('users') users!: any[];

  constructor() {}

  ngOnInit(): void {}
}
