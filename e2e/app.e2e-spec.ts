import { NgPreloaderPage } from './app.po';

describe('ng-preloader App', () => {
  let page: NgPreloaderPage;

  beforeEach(() => {
    page = new NgPreloaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
