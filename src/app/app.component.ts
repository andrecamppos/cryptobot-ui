import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateBotComponent } from './dialog-create-bot/dialog-create-bot.component';

interface Bot {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptobot';
  bots: Bot[] = [{ name: 'myBot1' },  { name: 'myBot2' }];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateBotComponent, {
      width: '250px',
    });
  }

}
