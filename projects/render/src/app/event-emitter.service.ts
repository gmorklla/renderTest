import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface VarChange {
  id: number;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  public varChange = new Subject<VarChange[]>();
}
