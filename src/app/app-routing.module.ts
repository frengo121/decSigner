import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewDocumentComponent} from './pages/view-document/view-document.component';
import {ErrorPage404Component} from './pages/error/error-page404/error-page404.component';
import {ErrorPage500Component} from './pages/error/error-page500/error-page500.component';

const routes: Routes = [
  {path: 'view-document', component: ViewDocumentComponent},
  {path: 'error-404', component: ErrorPage404Component},
  {path: 'error-500', component: ErrorPage500Component},
  {path: '**', pathMatch: 'full', redirectTo: 'error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
