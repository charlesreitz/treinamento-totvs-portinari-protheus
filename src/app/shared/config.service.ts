import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apibaseUrl = environment.baseUrl;
  constructor() { }

  public getHostRest() {
    return this.apibaseUrl;
  }

}
