import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Bot } from './bot.model';
import { BotService } from './bots/bot.service';
import { DialogCreateBotComponent } from './dialog-create-bot/dialog-create-bot.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptobot';

  bots$: Observable<Bot[]>;

  constructor(public dialog: MatDialog, private botService: BotService) {
    this.bots$ = this.botService.getAll();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateBotComponent, {
      width: '250px',
    });
  }

}
