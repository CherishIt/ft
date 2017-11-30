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
      .get(`http://result.eolinker.com/PGuRcYIb00fcad5b64a582339306e462c32d196624966bf?uri=/malls/${mallId}/levels/${levelId}`);
    // return of([
    //   {
    //     name: 'A区Gap对面',
    //     position: {
    //       female: {
    //         total: 5,
    //         available: 2,
    //       },
    //       male: {
    //         total: 5,
    //         available: 2,
    //       },
    //     },
    //   },
    //   {
    //     name: 'B区电梯旁边',
    //     position: {
    //       female: {
    //         total: 5,
    //         available: 2,
    //       },
    //       male: {
    //         total: 5,
    //         available: 2,
    //       },
    //     },
    //   },
    // ]);
  }
}
