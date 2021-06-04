import { GithubService } from './../../services/github.service';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  @Input('repoUrl') repoUrl!: string;
  repos: any[] = [];
  page: number = 1;
  pageSize: number = 10;

  constructor(private _github: GithubService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.repoUrl) {
      this._github.getRepos(this.repoUrl).subscribe(
        (repos) => {
          this.repos = repos;
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
