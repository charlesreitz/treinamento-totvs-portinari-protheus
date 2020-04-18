import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteListService {
  private readonly headers = { 'X-Portinari-No-Count-Pending-Requests': 'false', 'X-Portinari-Screen-Lock': 'true' };
  constructor(private http: HttpClient) { }

  getItems(PAGE) {
    // com tela para travar
    return this.http.get('cliente/v1',     {  headers: this.headers, params: {PAGE} });
    // sem tela para travar
    //return this.http.get('cliente/v1');
  }


}
