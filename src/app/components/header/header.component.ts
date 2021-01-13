import { Component, Renderer2, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  today: number = Date.now();

  constructor(private renderer: Renderer2, public dataService: DataService) { }

  renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  ngOnInit(): void {
    this.renderExternalScript('https://apis.google.com/js/platform.js').onload = () => {
      console.log('Google API Script loaded');
      // do something with this library
    };
  }

  onClickAceptar(){
    this.dataService.btnAceptar = true;
  }

}
