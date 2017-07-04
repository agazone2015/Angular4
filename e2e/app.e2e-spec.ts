import { AngularLipiecPage } from './app.po';

describe('angular-lipiec App', () => {
  let page: AngularLipiecPage;

  beforeEach(() => {
    page = new AngularLipiecPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
