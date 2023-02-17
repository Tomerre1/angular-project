import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}
  marketPriceChart: any = {
    title: 'Market History Chart',
    type: 'Line',
    data: [],
    options: {
      width: 600,
      height: 500,
    },
  };
  async ngOnInit(): Promise<void> {
    const data = await lastValueFrom(
      this.bitcoinService.getMarketPriceHistory()
    );
    this.marketPriceChart.data = data.values;
  }
}
