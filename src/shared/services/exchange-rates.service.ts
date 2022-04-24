import {Inject, Injectable} from '@angular/core';
import {IExchangeApiService, IExchangeApiServiceToken} from "../interfaces/IExchange";
import {StoreGood} from "../models/store-good";
import {BasketService} from "./basket.service";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  private _exchangeRate: any = {}

  constructor(
    @Inject(IExchangeApiServiceToken)
    public exchangeApiService: IExchangeApiService,
    public basketService: BasketService
  ) { }

  get exchangeRate(): any {
    return this._exchangeRate;
  }

  initialize(param: string, symbol: string) {
    this.basketService.exchangeSymbol = symbol;
    this.exchangeApiService.getExchange(param).subscribe((rate) => {
      this._exchangeRate = rate;
      this.basketService.updateSummaryWithCurrency(rate, param)
    });
  }
}
