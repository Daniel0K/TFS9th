import { Inject, Injectable } from '@angular/core';
import {
  IGoodsApiService,
  IGoodsApiServiceToken,
} from '../interfaces/IGoodsApiService';
import {StoreGood} from "../models/store-good";

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  private _goods: StoreGood[] = [];

  constructor(
    @Inject(IGoodsApiServiceToken)
    public goodsApiService: IGoodsApiService,
  ) {}

  get goods(): StoreGood[] {
    return this._goods;
  }

  initialize() {
    this.goodsApiService.getAll().subscribe((goods) => {
      this._goods = goods;
      console.log(goods);
    });
  }

}
