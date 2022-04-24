import {Component, OnInit} from '@angular/core';
import {ListCurrenciesService} from "../../../shared/services/list-currencies.service";
import {Currencies} from "../../../shared/models/currencies";
import {TuiStringHandler} from "@taiga-ui/cdk";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExchangeRatesService} from "../../../shared/services/exchange-rates.service";
import {TUI_VALIDATION_ERRORS} from "@taiga-ui/kit";
import {maxLengthValidator} from "../../../shared/validators/max-length";
import {minLengthValidator} from "../../../shared/validators/min-length";

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.less'],
  providers: [{
    provide: TUI_VALIDATION_ERRORS,
    useValue: {
      required: 'Поле обязательно для заполнения',
      maxlength: maxLengthValidator,
      minlength: minLengthValidator,
      pattern: 'Введите корректный email',
    },
  },
],
})
export class DeliveryFormComponent {
  value = '';

  constructor(public currenciesService: ListCurrenciesService,
              public exchangeService: ExchangeRatesService) {
  }

  form = new FormGroup({
    countryControl: new FormControl(null, Validators.required),
    addressControl: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(80),
    ]),
    nameControl: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(80),
    ]),
    emailControl: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(80),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ])
  })


  readonly stringify: TuiStringHandler<Currencies> = (item: Currencies) =>
    `${item.name.official}`;

  getExchange(event: any) {
    let param: string = "";
    let symbol: string = "";
    for (const eventElement in event.currencies) {
      param = eventElement.toString()
    }
    symbol = event.currencies[param].symbol;
    this.exchangeService.initialize(param, symbol)
  }
}
