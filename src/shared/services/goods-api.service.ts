import { IGoodsApiService } from '../interfaces/IGoodsApiService';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StoreGood} from "../models/store-good";

const host = 'http://localhost:3000/goods';

@Injectable()
export class GoodsApiService implements IGoodsApiService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<StoreGood[]> {
    return this.httpClient.get<StoreGood[]>(host);
  }
}
