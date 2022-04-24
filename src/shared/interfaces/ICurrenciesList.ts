import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import {Currencies} from "../models/currencies";

export const ICurrenciesListApiServiceToken = new InjectionToken(
  'ICurrenciesListApiService'
);

export interface ICurrenciesListApiService {
  getAll(): Observable<Currencies[]>;
}
