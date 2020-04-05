import { Injectable } from '@angular/core';
import { AboutLoggerService } from './about-logger.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private logger: AboutLoggerService) { }

  add(a, b) {
    this.logger.log("Addition")
    return a + b;
  }
}
