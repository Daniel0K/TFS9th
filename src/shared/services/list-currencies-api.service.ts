import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGoodsApiService} from "../interfaces/IGoodsApiService";
import {ICurrenciesListApiService} from "../interfaces/ICurrenciesList";
import {Currencies} from "../models/currencies";

const host = 'http://localhost:4200/all';

@Injectable({
  providedIn: 'root'
})
export class ListCurrenciesApiService implements ICurrenciesListApiService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Currencies[]> {
    return this.httpClient.get<Currencies[]>(host, {
    });
  }

}
