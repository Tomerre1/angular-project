import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ContactService } from '../services/contact.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class ContactGuard implements CanActivate {
  constructor(
    private contactService: ContactService,
    private userService: UserService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService.getUser();
  }
}
