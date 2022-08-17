import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-bot',
  templateUrl: './dialog-create-bot.component.html',
  styleUrls: ['./dialog-create-bot.component.css']
})
export class DialogCreateBotComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogCreateBotComponent>){ }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
