import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: AngularFireAuth) {}

  signUp(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this._auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this._auth.signInWithEmailAndPassword(email, password);
  }

  getUser(): Observable<firebase.default.User | null> {
    return this._auth.authState;
  }

  signOut(): Promise<void> {
    return this._auth.signOut();
  }
}
