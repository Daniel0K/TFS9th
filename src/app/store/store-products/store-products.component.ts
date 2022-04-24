import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GoodsService} from "../../../shared/services/goods.service";

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.less']
})
export class StoreProductsComponent implements OnInit {
  @Output()
  changeScene = new EventEmitter();


  constructor(public goodsService: GoodsService) { }

  ngOnInit(): void {
  }


  changeSceneComponent() {
    this.changeScene.emit();
  }
}
