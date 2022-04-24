import { Component, OnInit } from '@angular/core';
import {GoodsService} from "../../shared/services/goods.service";
import {ListCurrenciesService} from "../../shared/services/list-currencies.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent implements OnInit {
  isGoodsVisible: boolean = false;

  constructor(public goodsService: GoodsService,
              public currencyService: ListCurrenciesService) {

  }


  ngOnInit(): void {
    if (this.goodsService.goods !== undefined) {
      this.goodsService.initialize();
      this.currencyService.initialize();
    }
  }

  basketToggle() {
    this.isGoodsVisible = !this.isGoodsVisible;
  }
}
