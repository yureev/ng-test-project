
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RateService {

  constructor(private http: HttpClient) {  }

  getRate() {
    return this.http.get('/assets/rate.json');
  }
}
