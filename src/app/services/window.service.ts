import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../providers/window.provider';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(@Inject(WINDOW) private window: Window) {
  }

  getHostname(): string {
    return this.window.location.hostname;
  }
}
