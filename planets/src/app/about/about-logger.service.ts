import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutLoggerService {

  constructor() { }

  log(msg) {
    console.log(msg)
  }
}
