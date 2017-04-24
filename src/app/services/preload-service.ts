import { Injectable } from '@angular/core';

@Injectable()
export class PreloadService {
  public static loadingCount: number = 0;

  getPreloaderCount(): number {
      return PreloadService.loadingCount;
  }

  showPreloader(preloaderType = 'full'): void {
      PreloadService.loadingCount++;
  }

  hidePreloader(preloaderType = 'full'): void {
      PreloadService.loadingCount--;
  }
}
