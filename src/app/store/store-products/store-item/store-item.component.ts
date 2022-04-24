import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoreGood} from "../../../../shared/models/store-good";
import {BasketService} from "../../../../shared/services/basket.service";
import {Basket} from "../../../../shared/models/basket";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.less']
})
export class StoreItemComponent {

  @Input() good!:StoreGood;
  @Output() changeSceneItem = new EventEmitter();

  constructor(public basketService: BasketService) {  }

  form = new FormGroup({
    qtyField: new FormControl(1, Validators.required)
  })


  get formattedPrice(): string {
    return `${this.good.price} €`;
  }

  addToBasket() {
    let obj: Basket = {
      id: this.good.id,
      title: this.good.title,
      price: this.good.price,
      qty: this.form.get('qtyField')?.value
    }
    this.basketService.addGoodToBasket(obj);
    this.changeSceneItem.emit();
  }

}
