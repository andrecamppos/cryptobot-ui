import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bot } from '../bot.model';

@Injectable()
export class BotService {

  private readonly path = 'http://localhost:8080/cryptobot/all';

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get<Bot[]>(this.path);
  }

}
