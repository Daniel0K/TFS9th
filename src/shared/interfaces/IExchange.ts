import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import {Currencies} from "../models/currencies";

export const IExchangeApiServiceToken = new InjectionToken(
  'IExchangeApiService'
);

export interface IExchangeApiService {
  getExchange(param: string): Observable<any>;
}
