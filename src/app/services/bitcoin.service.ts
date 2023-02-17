import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://blockchain.info/tobtc?currency=USD';
  private _bitcoin$ = new BehaviorSubject<number>(0);
  public bitcoin$ = this._bitcoin$.asObservable();

  public getRate(coins: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}&value=${coins}`)
      .pipe(map((res) => res));
  }

  public getMarketPriceHistory(): Observable<any> {
    return this.http
      .get(
        'https://api.blockchain.info/charts/market-price?timespan=1years&format=json&cors=true'
      )
      .pipe(
        map((res: any) => {
          res.values = res.values.map((value: { x: number; y: number }) => {
            const newDate = new Date(value.x * 1000);
            const dateToDisplay = new Intl.DateTimeFormat('en-US').format(
              newDate
            );
            return [dateToDisplay, value.y];
          });

          return res;
        })
      );
    // const marketPriceHistory = res.data.values.map(
    //   (value: { x: number; y: any }) => {
    //     const newDate = new Date(value.x * 1000);
    //     const dateToDisplay = new Intl.DateTimeFormat('en-US').format(newDate);
    //     return [dateToDisplay, value.y];
    //   }
    // );
    // return marketPriceHistory;
  }

  // async getConfirmedTransactions() {
  //   let confirmedTransactions = storageService.loadFromStorage(
  //     'confirmedTransactions'
  //   );
  //   if (confirmedTransactions) {
  //     console.log('From Cache');
  //     return confirmedTransactions;
  //   }

  //   console.log('From Network');
  //   const str = `https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`;
  //   const res = await axios.get(str);

  //   confirmedTransactions = res.data.values.map(
  //     (value: { x: number; y: any }) => {
  //       const newDate = new Date(value.x * 1000);
  //       const dateToDisplay = new Intl.DateTimeFormat('en-US').format(newDate);
  //       return [dateToDisplay, value.y];
  //     }
  //   );

  //   storageService.saveToStorage(
  //     'confirmedTransactions',
  //     confirmedTransactions
  //   );
  //   return confirmedTransactions;
  // }
}
