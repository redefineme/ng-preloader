import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HttpService } from './services/http-service';
import { PreloadService } from './services/preload-service';
import { HeroesService } from './services/heroes-service';
import { Preloader } from './components/preloader/preloader-section';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { routing } from './app-routing';
// IMPORTANT!!!
export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, preloaderService: PreloadService) {
  return new HttpService(backend, defaultOptions, preloaderService);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Preloader
  ],
  bootstrap: [AppComponent],
  providers: [
    PreloadService,
    HeroesService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, PreloadService]
    }]
})
export class AppModule {
}
