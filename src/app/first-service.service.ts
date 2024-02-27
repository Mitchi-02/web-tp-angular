import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { 
  }
  public test(): void {
    alert('test');
  }
}
