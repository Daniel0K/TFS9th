import { Component, OnInit } from '@angular/core';
import {BasketService} from "../../../shared/services/basket.service";
import {Basket} from "../../../shared/models/basket";

@Component({
  selector: 'app-summary-form',
  templateUrl: './summary-form.component.html',
  styleUrls: ['./summary-form.component.less']
})
export class SummaryFormComponent implements OnInit {

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  }

  itemQtyChanged(event: Event, card: Basket) {
    card.qty = Number((event.target as HTMLInputElement).value);
    this.basketService.updateSummary();
  }
}
