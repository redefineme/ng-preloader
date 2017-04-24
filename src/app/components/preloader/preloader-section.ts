import { Component } from '@angular/core';
import { PreloadService } from '../../services/preload-service';
@Component({
  selector: 'preloader',
  styleUrls: [
    './preloader-section.scss'
  ],
  templateUrl: './preloader-section.html'
})
export class Preloader {
  constructor(public preloaderService: PreloadService) {
  }
}

