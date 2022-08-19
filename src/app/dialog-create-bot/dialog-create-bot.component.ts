import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-bot',
  templateUrl: './dialog-create-bot.component.html',
  styleUrls: ['./dialog-create-bot.component.css']
})
export class DialogCreateBotComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogCreateBotComponent>){ }

  botForm = new FormGroup({
    name: new FormControl(),
    pair: new FormControl(),
    buyPower: new FormControl()
  }); 

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    console.log('Name:' + this.botForm?.get('name')?.value);
  } 

}
