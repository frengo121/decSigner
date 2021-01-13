import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ErrorPage404Component } from './error/error-page404/error-page404.component';
import { ErrorPage500Component } from './error/error-page500/error-page500.component';


@NgModule({
  declarations: [ViewDocumentComponent, ErrorPage404Component, ErrorPage500Component],
  exports: [
    ViewDocumentComponent
  ],
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,
  ]
})
export class PagesModule { }
