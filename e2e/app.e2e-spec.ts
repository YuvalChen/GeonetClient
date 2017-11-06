import { GeonetClientPage } from './app.po';

describe('geonet-client App', () => {
  let page: GeonetClientPage;

  beforeEach(() => {
    page = new GeonetClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
