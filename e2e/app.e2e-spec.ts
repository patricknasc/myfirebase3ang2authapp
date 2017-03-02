import { Myfirebase3ang2authappPage } from './app.po';

describe('myfirebase3ang2authapp App', () => {
  let page: Myfirebase3ang2authappPage;

  beforeEach(() => {
    page = new Myfirebase3ang2authappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
