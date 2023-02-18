import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private _user$ = new BehaviorSubject<User>({
    name: 'Tomer',
    coins: 100,
    moves: [],
  });
  public user$ = this._user$.asObservable();
  public getUser(): Observable<boolean> {
    return of(!!this._user$.value);
  }
}
