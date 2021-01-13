import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  btnAceptar: boolean;
  errorPage: boolean;

  constructor() {
    this.btnAceptar = false;
    this.errorPage = false;
  }
}
