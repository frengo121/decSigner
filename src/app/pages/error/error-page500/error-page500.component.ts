import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-error-page500',
  templateUrl: './error-page500.component.html',
  styleUrls: ['./error-page500.component.scss']
})
export class ErrorPage500Component implements OnInit {

  constructor(private dataService: DataService) {
    this.dataService.errorPage = true;
  }

  ngOnInit(): void {

  }

}
