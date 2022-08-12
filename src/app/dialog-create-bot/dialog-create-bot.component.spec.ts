import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateBotComponent } from './dialog-create-bot.component';

describe('DialogCreateBotComponent', () => {
  let component: DialogCreateBotComponent;
  let fixture: ComponentFixture<DialogCreateBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
