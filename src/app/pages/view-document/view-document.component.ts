import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { PagesLoadedEvent } from 'ngx-extended-pdf-viewer/lib/events/pages-loaded-event';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent implements OnInit, AfterViewInit {

  @ViewChild('modal_1') modal_1: TemplateRef<any> | undefined;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef | undefined;
  backdrop: any;

  public latitude: any;
  public longitude: any;
  viewButtons = false;
  // pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  // pdfSrc = 'assets/files/pdf-white.pdf';
  pdfSrc = '';
  backgroundColor = '#e9e9e9';
  totalPages = 0;
  pages = 0;
  pdfHeight = '80vh';
  eventAcept = true;

  constructor(public locationService: LocationService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getLocation();
  }

  ngAfterViewInit(): void {
    this.showDialog();
  }

  getLocation(): any {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    });
  }

  onPagesLoaded(event: PagesLoadedEvent): any {
    this.totalPages = event.pagesCount;
    if (this.totalPages === 1){
      this.viewButtons = true;
      this.pdfHeight = '73vh';
    }
  }

  onPagesChange(event: any): any {
    this.pages = event;

    if (this.totalPages === this.pages && this.eventAcept) {
      this.viewButtons = true;
      this.pdfHeight = '58vh';
    }
  }

  onClickAceptar(): void {
    this.dataService.btnAceptar = true;
    this.viewButtons = false;
    this.pdfHeight = '80vh';
    this.eventAcept = false;
  }

  showDialog(): void {
    if (this.modal_1) {
      const view = this.modal_1.createEmbeddedView(null);
      if (this.vc) {
        this.vc.insert(view);
      }
      this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
      this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
      this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
      this.backdrop = document.createElement('DIV');
      this.backdrop.className = 'modal-backdrop';
      document.body.appendChild(this.backdrop);
      // this.backgroundColor = '#a3a3a3';
    }
  }

  closeDialog(): void {
    if (this.vc) {
      this.vc.clear();
      document.body.removeChild(this.backdrop);
      this.pdfSrc = 'assets/files/FICHA-TECNICA-COMPROBANTES-ELECTRONICOS-ESQUEMA-OFFLINE.pdf';
      // this.pdfSrc = 'https://stupendo-dec-desarrollo.s3.amazonaws.com/doc_electronicos/procesos_simples/cliente_5d1bad3e3dfb4538b404c8cf/2728/documentos/1.pdf';
      // this.backgroundColor = '#e9e9e9';
    }
  }

  validatePin(pin: string): void{
    if (pin.length === 4) {
      this.closeDialog();
    }
  }

}
