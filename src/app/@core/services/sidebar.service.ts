import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isExpanded = new BehaviorSubject<boolean>(false);
  private isLocked = new BehaviorSubject<boolean>(false);

  getIsExpanded() {
    return this.isExpanded.asObservable();
  }

  getIsLocked() {
    return this.isLocked.asObservable();
  }

  toggle() {
    const newValue = !this.isExpanded.value;
    this.isExpanded.next(newValue);
    this.isLocked.next(newValue);
  }

  expand() {
    if (!this.isLocked.value) {
      this.isExpanded.next(true);
    }
  }

  collapse() {
    if (!this.isLocked.value) {
      this.isExpanded.next(false);
    }
  }
}
