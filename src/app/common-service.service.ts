import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private userName = new BehaviorSubject<string | undefined>(undefined);

  setUserName(name: string) {
    this.userName.next(name);
  }

  getUserName() {
    return this.userName.asObservable();
  }
}
