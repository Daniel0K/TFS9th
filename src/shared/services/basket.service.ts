import { Injectable } from '@angular/core';
import {Basket} from "../models/basket";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  goodsBasket: Basket[]=[];
  isNewGood = true;
  summary: number = 0;
  exchangeRate: number = 1;
  exchangeSymbol: string = "€"

  constructor() { }

  addGoodToBasket(good: Basket):void {

    this.goodsBasket.forEach((el) => {
      if (el.id === good.id) {
        el.qty += good.qty;
        this.isNewGood = false;
        return;
      }
    })

    if (this.isNewGood) {
      this.goodsBasket.push(good);
    }

    this.isNewGood = true;
    this.updateSummary();
  }
  delGoodToBasket(good: Basket):void {
    this.goodsBasket.splice(this.goodsBasket.indexOf(good),1);
    this.updateSummary();
  }

  updateSummary() {
      this.summary = 0;
      this.goodsBasket.forEach((el) => {
        this.summary += el.qty * el.price * this.exchangeRate;
    })
  }

  updateSummaryWithCurrency(rate: any, param: string) {
    this.exchangeRate = +rate.rates[param];
    this.updateSummary()
  }
}
