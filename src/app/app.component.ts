import { LoaderService } from './services/loader.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'github-searcher';

  show: boolean = false;

  constructor(
    private _loader: LoaderService,
    private _ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._loader.showLoader.subscribe((show: boolean) => {
      this.show = show;
      this._ref.detectChanges();
    });
  }
}
