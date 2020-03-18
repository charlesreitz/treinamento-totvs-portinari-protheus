import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    apibaseUrl: string = '';
  constructor() { }

  public getHostRest() {
    return this.apibaseUrl;
}

}