import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private userSerivce: UserService,
    private bitcoinService: BitcoinService
  ) {}
  user$!: Subscription;
  user!: User;
  btcCoins!: number;
  isLoading: boolean = true;
  marketHistory: any;
  ngOnInit(): void {
    this.user$ = this.userSerivce.user$.subscribe((user) => {
      this.user = user;
    });

    this.bitcoinService.getRate(this.user.coins).subscribe((btc) => {
      this.btcCoins = btc;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }
}
