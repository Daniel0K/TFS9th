import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currencies} from "../models/currencies";
import {IExchangeApiService} from "../interfaces/IExchange";

const host = 'http://localhost:4200/latest';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesApiService implements IExchangeApiService{

  constructor(private httpClient: HttpClient) { }

  getExchange(param: string): Observable<Currencies[]> {
    return this.httpClient.get<Currencies[]>(host, {
      params: {
        access_key:'a28e9a6ce2ebb3981ffa91cf346c970f',
        symbols:param
      }
    });
  }
}
