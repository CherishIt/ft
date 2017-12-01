import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LevelService {

  constructor(
    private http: HttpClient,
  ) { }

  getToilets(mallId, levelId): Observable<any> {
    return this.http
      .get(`https://result.eolinker.com/PGuRcYIb00fcad5b64a582339306e462c32d196624966bf?uri=/malls/${mallId}/levels/${levelId}`);
  }
}
