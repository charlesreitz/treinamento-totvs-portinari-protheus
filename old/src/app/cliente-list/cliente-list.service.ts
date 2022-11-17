import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteListService {
  private readonly headers = { 'X-Portinari-No-Count-Pending-Requests': 'false', 'X-Portinari-Screen-Lock': 'true' };
  constructor(private http: HttpClient) {
  }

  get(PAGE) {
    // com tela para travar
    return this.http.get('cliente/v1',
      {
        headers: this.headers,
        params: { PAGE }
      });
    // sem tela para travar
    //return this.http.get('cliente/v1');
  }

  delete(A1_COD: string, A1_LOJA: string) {
    return this.http
      .delete(`cliente/v1/${A1_COD}/${A1_LOJA}`,
        { headers: this.headers });
  }


  put(A1_COD: string, A1_LOJA: string) {
    return this.http.put(`cliente/v1/${A1_COD}/${A1_LOJA}`,
      { headers: this.headers });
  }


}
