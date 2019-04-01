import { Component, OnInit } from '@angular/core';
import {RateService} from '../rate.service';
import {Rate} from '../rate';


@Component({
  selector: 'app-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.css'],
  providers: [RateService]
})

export class RatesTableComponent implements OnInit {

  rate: Rate;

  constructor(private rateService: RateService) { }

  ngOnInit() {
    this.rateService.getRate().subscribe((data: Rate) => this.rate = data);
  }

}
