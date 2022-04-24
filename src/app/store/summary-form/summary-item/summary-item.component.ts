import {Component, Input, OnInit} from '@angular/core';
import {StoreGood} from "../../../../shared/models/store-good";
import {Basket} from "../../../../shared/models/basket";
import {BasketService} from "../../../../shared/services/basket.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.less']
})
export class SummaryItemComponent implements OnInit {

  @Input() basketGood!:Basket;

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  this.form.controls['qtyField'].setValue(this.basketGood.qty)
  }

  get formattedPrice(): string {
    return `${this.basketGood.price} €`;
  }

  form = new FormGroup({
    qtyField: new FormControl()
  })

}
