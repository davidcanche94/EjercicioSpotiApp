import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// se importa el routermodule
import { RouterModule } from '@angular/router';
// peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
// se importan las rutas que configuramos en el app.routes.ts
import { ROUTES } from './app.routes';
import { UrlimagePipe } from './pipes/urlimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistasPipe } from './pipes/artistas.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    UrlimagePipe,
    TarjetasComponent,
    LoadingComponent,
    ArtistasPipe,
    DomseguroPipe,
    AlertErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES , { useHash:true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
