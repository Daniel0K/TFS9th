import { Observable } from 'rxjs';
import { StoreGood } from '../models/store-good'
import { InjectionToken } from '@angular/core';

export const IGoodsApiServiceToken = new InjectionToken(
  'IGoodsApiService'
);

export interface IGoodsApiService {
  getAll(): Observable<StoreGood[]>;
}
