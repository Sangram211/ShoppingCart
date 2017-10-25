import { ShopingCartPage } from './app.po';

describe('shoping-cart App', () => {
  let page: ShopingCartPage;

  beforeEach(() => {
    page = new ShopingCartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
