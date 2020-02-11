import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
@Injectable()
export class UserService{
  // Subject is more active then a Observable
  // you call next() from the outside
  activateEmitter = new Subject<boolean>()
}