import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  url: string = 'https://api.github.com/users';
  key: string = `&client_id=${environment.GITHUB_CLIENT_ID}&client_secret=${environment.GITHUB_CLIENT_SECRETE_KEY}`;
  constructor(private _http: HttpClient) {}

  getUserDetails(userName: string) {
    return this._http.get(`${this.url}/${userName}`);
  }

  getRepos(repoUrl: string): Observable<any[]> {
    return this._http.get<any[]>(repoUrl);
  }

  SearchUsers(text: string) {
    return this._http.get<any>(
      `https://api.github.com/search/users?q=${text}${this.key}`
    );
  }
}
