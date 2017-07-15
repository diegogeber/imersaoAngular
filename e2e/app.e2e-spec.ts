import { ImersaoAngularPage } from './app.po';

describe('imersao-angular App', () => {
  let page: ImersaoAngularPage;

  beforeEach(() => {
    page = new ImersaoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
