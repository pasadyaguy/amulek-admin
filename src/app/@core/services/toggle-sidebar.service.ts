import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleSidebarService {
  private isExpanded = new BehaviorSubject<boolean>(false);

  getIsExpanded() {
    return this.isExpanded.asObservable();
  }

  toggleValue() {
    this.isExpanded.next(!this.isExpanded.value);
  }
}
