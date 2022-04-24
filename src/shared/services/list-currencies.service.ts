import {Inject, Injectable} from '@angular/core';
import {IGoodsApiService, IGoodsApiServiceToken} from "../interfaces/IGoodsApiService";
import {ICurrenciesListApiService, ICurrenciesListApiServiceToken} from "../interfaces/ICurrenciesList";
import {StoreGood} from "../models/store-good";
import {Currencies} from "../models/currencies";

@Injectable({
  providedIn: 'root'
})
export class ListCurrenciesService {
  private _currencies: Currencies[] = [];

  constructor(
    @Inject(ICurrenciesListApiServiceToken)
    public currenciesApiService: ICurrenciesListApiService
  ) { }

  initialize() {
    this.currenciesApiService.getAll().subscribe((currencies => {
      this._currencies = currencies;
      console.log(currencies);
    }))
  }

  get currencies(): Currencies[] {
    return this._currencies;
  }
}
